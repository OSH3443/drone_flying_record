<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// POST 요청 본문에서 데이터를 읽어옵니다
$input = file_get_contents('php://input');
// 로그 파일에 날짜와 함께 기록합니다
file_put_contents('./debug.log', date('Y-m-d H:i:s') . ": " . $input . "\n", FILE_APPEND);

// session_start();

// if (session_status() !== PHP_SESSION_ACTIVE) {
//     header('HTTP/1.1 500 Internal Server Error');
//     echo json_encode(["error" => "세션 시작 실패"]);
//     exit();
// }

// if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
//     header('HTTP/1.1 403 Forbidden');
//     echo json_encode(["error" => "권한없음"]);
//     exit();
// }

// 데이터 파싱
parse_str($input, $parsedData);
// 관측소 ID가 제대로 전달되었는지 확인합니다
if (!isset($parsedData['stationId']) || empty($parsedData['stationId'])) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(["error" => "관측소 ID를 입력해주세요"]);
    exit();
}
$stationId = $parsedData['stationId'];

// 기상청 API 키 설정
$config = parse_ini_file('./config.txt');
$apiKey = $config['kmaAPIkey'];

// 기상청 API
$kmaApiUrl = "https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?stn={$stationId}&authKey={$apiKey}";
// echo "API URL: $kmaApiUrl";

// 데이터 가져오기
$responseKma = file_get_contents($kmaApiUrl);
// echo "API Response: $responseKma";

// 데이터가 성공적으로 가져와졌는지 확인
if ($responseKma === false) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(["error" => "API 데이터 접근 실패"]);
    exit();
}

// CSV 데이터를 처리하는 함수
function extractWeatherData($data) {
    // 데이터 행을 찾습니다 (마지막 줄)
    $lines = explode("\n", $data);
    $dataLine = null;
    foreach ($lines as $line) {
        if (preg_match('/^\d/', $line)) {
            $dataLine = $line;
            break;
        }
    }

    if (!$dataLine) {
        return ["error" => "데이터를 찾을 수 없음"];
    }

    // 공백을 기준으로 데이터를 나눕니다
    $fields = preg_split('/\s+/', $dataLine);

    // 필요한 데이터의 인덱스를 정의합니다
    $fieldIndices = [
        // Date: 측정 일시, WS: 풍속, TA: 기온, HM: 습도, CA_TOT: 전운량, SI: 일사량
        "Date" => 0,
        "WS" => 3,
        "TA" => 11,
        "HM" => 13,
        "CA_TOT" => 25,
        "SI" => 34
    ];

    // 데이터를 추출합니다
    $extractedData = [
        "Date" => DatetoDateTime($fields[$fieldIndices["Date"]]),
        "WS" => round(floatval($fields[$fieldIndices["WS"]]), 1),
        "TA" => floatval($fields[$fieldIndices["TA"]]),
        "HM" => floatval($fields[$fieldIndices["HM"]]),
        "CA_TOT" => CA_TOTtoOktas(intval($fields[$fieldIndices["CA_TOT"]])),
        "SI" => SItoWm2(floatval($fields[$fieldIndices["SI"]]))
    ];

    return $extractedData;
}

function SItoWm2($SI) {
    if ($SI < 0) {
        return 0;
    }
    return round($SI * 1000000 / 3600);
}

function CA_TOTtoOktas($CA_TOT) {
    if ($CA_TOT < 0 || $CA_TOT > 10) {
        return "DATA ERROR";
    }
    return round($CA_TOT / 10 * 8);
}

function DatetoDateTime($Date) {
    $date = substr($Date, 0, 8);
    $time = substr($Date, 8, 4);
    return date('Y-m-d H:i:s', strtotime("$date $time"));
}

// NOAA 지구 외 행성 K 지수 데이터 가져오기
// NOAA : https://www.swpc.noaa.gov/products/planetary-k-index
// 지구자기장 관측데이터 - 우주환경센터 : https://spaceweather.kasa.go.kr/obsenv3.do
$noaaApiUrl = 'https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json';
$responseNOAA = file_get_contents($noaaApiUrl);

// NOAA 데이터 처리
$noaaData = json_decode($responseNOAA, true);

// 가장 최신의 K 지수 데이터 가져오기
$latestNOAAData = end($noaaData);

// NOAA 데이터의 timestamp 소수점 제거
if (isset($latestNOAAData[0])) {
    $latestNOAAData[0] = substr($latestNOAAData[0], 0, -4);
}

// 합쳐진 데이터 배열 구성
$combinedData = [
    'kma' => extractWeatherData($responseKma),
    'noaa' => $latestNOAAData
];

// JSON 형식으로 반환
header('Content-Type: application/json');
echo json_encode($combinedData);

?>
