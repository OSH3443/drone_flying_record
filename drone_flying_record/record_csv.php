<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$input = file_get_contents('php://input');
file_put_contents('./debug.log', date('Y-m-d H:i:s') . ": " . $input . "\n", FILE_APPEND);

header('Content-Type: application/json');

$csvFile = './메타파스_드론비행기록부.csv';

$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'];

switch ($action) {
    case 'save':
        $result = saveData($data['data'], $csvFile);
        echo json_encode(['success' => $result]);
        break;
    case 'place':
        $places = readPlace($csvFile);
        echo json_encode(['success' => true, 'places' => $places]);
        break;
    case 'searchPlace':
        $records = searchPlaceData($data['place'], $csvFile);
        echo json_encode(['success' => true, 'records' => $records]);
        break;
    case 'searchId':
        $records = searchIdData($data['id'], $csvFile);
        echo json_encode(['success' => true, 'records' => $records]);
        break;
    case 'delete':
        $result = deleteData($data['id'], $csvFile);
        echo json_encode(['success' => $result]);
        break;
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
}


//-----------------------------------------------------------------------------------
// 고유번호 생성
function getNextId($file) {
    $lastId = 0;
    if (($handle = fopen($file, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if (isset($data[0]) && is_numeric($data[0]) && (int)$data[0] > $lastId) {
                $lastId = (int)$data[0];
            }
        }
        fclose($handle);
    }
    return $lastId + 1;
}

// 데이터 저장
function saveData($data, $file) {
    // 파일 열기
    $fp = fopen($file, 'a+');
    if ($fp === false) {
        return false;
    }

    // 파일이 비어있거나 헤더가 비어있는지 확인
    $fileIsEmpty = (filesize($file) == 0);
    $headerExists = false;

    // 파일이 비어있지 않은 경우, 첫 번째 줄을 읽어 헤더 확인
    if (!$fileIsEmpty) {
        $firstLine = fgets($fp);
        // 헤더가 비어있는지 확인
        $headerExists = !empty(trim($firstLine));
    }

    // 파일이 비어있다면 헤더 추가
    if (!$headerExists) {
        $headers = [
            'ID', '날짜', '위치명', '저장위치', '관측소ID', 
            'KMA풍속', 'KMA기온', 'KMA습도', 'KMA운량', 'KMA일사량','KMA시간',
            'NOAA_KP','NOAA시간',
            '수동SI', '수동TA', '수동WS', '수동CA', '수동HM', 'PVCT'
        ];
        if (fputcsv($fp, $headers) === false) {
            fclose($fp);
            return false;
        }
    } 
    $newId = getNextId($file);

    // 데이터 배열의 각 키가 정의되어 있는지 확인하고 기본 값을 설정합니다.
    $data['save_location'] = str_replace(' ', '', $data['save_location'] ?? '');

    $data['kma_data'] = $data['kma_data'] ?? [
        'WS' => '', 'TA' => '', 'HM' => '', 'CA_TOT' => '', 'SI' => '', 'Date' => ''
    ];
    $data['noaa_data'] = $data['noaa_data'] ?? [null, ''];
    $data['manual_datas'] = $data['manual_datas'] ?? [
        'SI' => '', 'TA' => '', 'WS' => '', 'CA' => '', 'HM' => '', 'PVCT' => ''
    ];

    // 데이터 저장 코드 수정
    $newRow = [
        $newId,
        $data['date_data'] ?? '',
        $data['location_name'] ?? '',
        $data['save_location'] ?? '',
        $data['station_id'] ?? '',
        $data['kma_data']['WS'] ?? '',
        $data['kma_data']['TA'] ?? '',
        $data['kma_data']['HM'] ?? '',
        $data['kma_data']['CA_TOT'] ?? '',
        $data['kma_data']['SI'] ?? '',
        $data['kma_data']['Date'] ?? '',
        $data['noaa_data'][1] ?? '', // KP 지수
        $data['noaa_data'][0] ?? '',
        $data['manual_datas']['SI'] ?? '',
        $data['manual_datas']['TA'] ?? '',
        $data['manual_datas']['WS'] ?? '',
        $data['manual_datas']['CA'] ?? '',
        $data['manual_datas']['HM'] ?? '',
        $data['manual_datas']['PVCT'] ?? ''
    ];

    if (fputcsv($fp, $newRow) === false) {
        fclose($fp);
        return false;
    }

    fclose($fp);
    return true;
}

//-----------------------------------------------------------------------------------
// 위치명 가져오기
// function readPlace($csvFile) {
//     $locations = [];
//     if (($handle = fopen($csvFile, "r")) !== false) {
//         $headers = fgetcsv($handle, 1000, ","); // 첫 번째 줄 (헤더) 읽기
//         while (($data = fgetcsv($handle, 1000, ",")) !== false) {
//             $locationName = $data[2]; // 위치명은 세 번째 필드
//             if (!in_array($locationName, $locations)) {
//                 $locations[] = $locationName;
//             }
//         }
//         fclose($handle);
//     }
//     return $locations;
// }

// 위치명 가져오기
function readPlace($csvFile) {
    $locations = [];
    if (($handle = fopen($csvFile, "r")) !== false) {
        $headers = fgetcsv($handle, 1000, ","); // 첫 번째 줄 (헤더) 읽기
        while (($data = fgetcsv($handle, 1000, ",")) !== false) {
            // 데이터 행의 길이가 3 이상인지 확인
            if (count($data) > 2) {
                $locationName = $data[2]; // 위치명은 세 번째 필드
                if (!in_array($locationName, $locations)) {
                    $locations[] = $locationName;
                }
            }
        }
        fclose($handle);
    }
    return $locations;
}
//-----------------------------------------------------------------------------------
// 위치명으로 데이터 검색
function searchPlaceData($location, $csvFile) {
    $records = [];
    if (($handle = fopen($csvFile, "r")) !== FALSE) {
        $headers = fgetcsv($handle, 1000, ","); // 첫 번째 줄 (헤더) 읽기
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if (stripos($data[2], $location) !== false) { // 위치명이 검색어를 포함하는 경우
                $records[] = [
                    'id' => $data[0],
                    'date' => $data[1],
                    'place' => $data[2]
                ];
            }
        }
        fclose($handle);
    }
    return $records;
}

//-----------------------------------------------------------------------------------
// ID로 데이터 검색
// case 'searchId':
//     $records = searchIdData($data['id'], $csvFile);
//     echo json_encode(['success' => true, 'records' => $records]);
//     break;
function searchIdData($id, $csvFile) {
    $records = [];
    if (($handle = fopen($csvFile, "r")) !== FALSE) {
        $headers = fgetcsv($handle, 1000, ","); // 첫 번째 줄 (헤더) 읽기
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if ($data[0] == $id) { // ID가 검색어와 일치하는 경우
                $records = [
                    'id' => $data[0],
                    'date' => $data[1],
                    'place' => $data[2],
                    'location' => $data[3],
                    'station_id' => $data[4],
                    'kma_data' => [
                        'WS' => $data[5],
                        'TA' => $data[6],
                        'HM' => $data[7],
                        'CA_TOT' => $data[8],
                        'SI' => $data[9],
                        'Date' => $data[10]
                    ],
                    'noaa_data' => [
                        'Kp' => $data[11],
                        'Date' => $data[12]
                    ],
                    'manual_datas' => [
                        'SI' => $data[13],
                        'TA' => $data[14],
                        'WS' => $data[15],
                        'CA' => $data[16],
                        'HM' => $data[17],
                        'PVCT' => $data[18]
                    ]
                ];
            }
        }
        fclose($handle);
    }
    return $records;
}

//-----------------------------------------------------------------------------------
// 데이터 삭제
function deleteData($id, $file) {
    $rows = [];
    if (($handle = fopen($file, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if ($data[0] !== $id) {
                $rows[] = $data;
            }
        }
        fclose($handle);
    }

    $fp = fopen($file, 'w');
    foreach ($rows as $row) {
        fputcsv($fp, $row);
    }
    fclose($fp);
    return true;
}
?>