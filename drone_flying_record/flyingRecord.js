// ------------------------------------------------------------------------------------
// 기상관측소 위치 정보
const weatherStations = [
    {id: 90, name: "속초", lat: 38.25085, lon: 128.56473},
    {id: 93, name: "북춘천", lat: 37.94738, lon: 127.75443},
    {id: 95, name: "철원", lat: 38.14787, lon: 127.3042},
    {id: 98, name: "동두천", lat: 37.90188, lon: 127.0607},
    {id: 99, name: "파주", lat: 37.88589, lon: 126.76648},
    {id: 100, name: "대관령", lat: 37.67713, lon: 128.71834},
    {id: 101, name: "춘천", lat: 37.90262, lon: 127.7357},
    {id: 102, name: "백령도", lat: 37.97396, lon: 124.71237},
    {id: 104, name: "북강릉", lat: 37.80456, lon: 128.85535},
    {id: 105, name: "강릉", lat: 37.75147, lon: 128.89099},
    {id: 106, name: "동해", lat: 37.50709, lon: 129.12433},
    {id: 108, name: "서울", lat: 37.57142, lon: 126.9658},
    {id: 112, name: "인천", lat: 37.47772, lon: 126.6249},
    {id: 114, name: "원주", lat: 37.33749, lon: 127.94659},
    {id: 115, name: "울릉도", lat: 37.48129, lon: 130.89864},
    {id: 119, name: "수원", lat: 37.25746, lon: 126.983},
    {id: 121, name: "영월", lat: 37.18126, lon: 128.45743},
    {id: 127, name: "충주", lat: 36.97045, lon: 127.9525},
    {id: 129, name: "서산", lat: 36.77658, lon: 126.4939},
    {id: 130, name: "울진", lat: 36.99176, lon: 129.41278},
    {id: 131, name: "청주", lat: 36.63924, lon: 127.44066},
    {id: 133, name: "대전", lat: 36.37199, lon: 127.3721},
    {id: 135, name: "추풍령", lat: 36.22025, lon: 127.99458},
    {id: 136, name: "안동", lat: 36.57293, lon: 128.70734},
    {id: 137, name: "상주", lat: 36.40837, lon: 128.15741},
    {id: 138, name: "포항", lat: 36.03201, lon: 129.38002},
    {id: 140, name: "군산", lat: 36.0053, lon: 126.76135},
    {id: 143, name: "대구", lat: 35.87797, lon: 128.65295},
    {id: 146, name: "전주", lat: 35.84092, lon: 127.11718},
    {id: 152, name: "울산", lat: 35.58237, lon: 129.33469},
    {id: 155, name: "창원", lat: 35.17019, lon: 128.57281},
    {id: 156, name: "광주", lat: 35.17294, lon: 126.89156},
    {id: 159, name: "부산", lat: 35.10468, lon: 129.03203},
    {id: 162, name: "통영", lat: 34.84541, lon: 128.43561},
    {id: 165, name: "목포", lat: 34.81732, lon: 126.38151},
    {id: 168, name: "여수", lat: 34.73929, lon: 127.74063},
    {id: 169, name: "흑산도", lat: 34.68719, lon: 125.45105},
    {id: 170, name: "완도", lat: 34.3959, lon: 126.70182},
    {id: 172, name: "고창", lat: 35.34824, lon: 126.599},
    {id: 174, name: "순천", lat: 35.0204, lon: 127.3694},
    {id: 177, name: "홍성", lat: 36.65759, lon: 126.68772},
    {id: 181, name: "서청주", lat: 36.64002, lon: 127.38466},
    {id: 184, name: "제주", lat: 33.51411, lon: 126.52969},
    {id: 185, name: "고산", lat: 33.29382, lon: 126.16283},
    {id: 188, name: "성산", lat: 33.38677, lon: 126.8802},
    {id: 189, name: "서귀포", lat: 33.24616, lon: 126.5653},
    {id: 192, name: "진주", lat: 35.16378, lon: 128.04004},
    {id: 201, name: "강화", lat: 37.70739, lon: 126.44634},
    {id: 202, name: "양평", lat: 37.48863, lon: 127.49446},
    {id: 203, name: "이천", lat: 37.26399, lon: 127.48421},
    {id: 211, name: "인제", lat: 38.05986, lon: 128.16714},
    {id: 212, name: "홍천", lat: 37.6836, lon: 127.88043},
    {id: 216, name: "태백", lat: 37.17038, lon: 128.98929},
    {id: 217, name: "정선군", lat: 37.37732, lon: 128.67348},
    {id: 221, name: "제천", lat: 37.15928, lon: 128.19434},
    {id: 226, name: "보은", lat: 36.48761, lon: 127.73415},
    {id: 232, name: "천안", lat: 36.76217, lon: 127.29282},
    {id: 235, name: "보령", lat: 36.32724, lon: 126.55744},
    {id: 236, name: "부여", lat: 36.27242, lon: 126.92079},
    {id: 238, name: "금산", lat: 36.10563, lon: 127.48175},
    {id: 239, name: "세종", lat: 36.48522, lon: 127.24438},
    {id: 243, name: "부안", lat: 35.72961, lon: 126.71657},
    {id: 244, name: "임실", lat: 35.61203, lon: 127.28556},
    {id: 245, name: "정읍", lat: 35.56337, lon: 126.83904},
    {id: 247, name: "남원", lat: 35.4213, lon: 127.39652},
    {id: 248, name: "장수", lat: 35.65696, lon: 127.52031},
    {id: 251, name: "고창군", lat: 35.42661, lon: 126.697},
    {id: 252, name: "영광군", lat: 35.28366, lon: 126.47784},
    {id: 253, name: "김해시", lat: 35.22981, lon: 128.89075},
    {id: 254, name: "순창군", lat: 35.37131, lon: 127.1286},
    {id: 255, name: "북창원", lat: 35.22655, lon: 128.6726},
    {id: 257, name: "양산시", lat: 35.30737, lon: 129.0201},
    {id: 258, name: "보성군", lat: 34.76335, lon: 127.21226},
    {id: 259, name: "강진군", lat: 34.64457, lon: 126.78408},
    {id: 260, name: "장흥", lat: 34.68886, lon: 126.91951},
    {id: 261, name: "해남", lat: 34.55375, lon: 126.56907},
    {id: 262, name: "고흥", lat: 34.61826, lon: 127.27572},
    {id: 263, name: "의령군", lat: 35.32258, lon: 128.28812},
    {id: 264, name: "함양군", lat: 35.51138, lon: 127.74538},
    {id: 266, name: "광양시", lat: 34.9434, lon: 127.6914},
    {id: 268, name: "진도군", lat: 34.47296, lon: 126.25846},
    {id: 271, name: "봉화", lat: 36.94361, lon: 128.91449},
    {id: 272, name: "영주", lat: 36.87183, lon: 128.51688},
    {id: 273, name: "문경", lat: 36.62727, lon: 128.14879},
    {id: 276, name: "청송군", lat: 36.4351, lon: 129.04005},
    {id: 277, name: "영덕", lat: 36.53337, lon: 129.40926},
    {id: 278, name: "의성", lat: 36.3561, lon: 128.68864},
    {id: 279, name: "구미", lat: 36.13055, lon: 128.32056},
    {id: 281, name: "영천", lat: 35.97742, lon: 128.9514},
    {id: 283, name: "경주시", lat: 35.8174, lon: 129.2009},
    {id: 284, name: "거창", lat: 35.66739, lon: 127.9099},
    {id: 285, name: "합천", lat: 35.56505, lon: 128.16994},
    {id: 288, name: "밀양", lat: 35.49147, lon: 128.74413},
    {id: 289, name: "산청", lat: 35.413, lon: 127.8791},
    {id: 294, name: "거제", lat: 34.88818, lon: 128.60458},
    {id: 295, name: "남해", lat: 34.81662, lon: 127.92641},
    {id: 296, name: "북부산", lat: 35.21778, lon: 128.96024}
];

// 저장용 위치 선언
let save_location = null;
let station_id = null;
let searchPlace = null;

// 기록 아이디 저장 변수
let currentRecordId = null;

// 가장 가까운 기상 관측소 찾기
function findNearestStation() {
    document.getElementById("output").innerHTML = "위치를 찾는 중...";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const currentLocation = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            const nearestStation = getNearestStation(currentLocation);
            const distance = getDistance(currentLocation, nearestStation);

            // 가까운 기상 관측소 아이디 저장
            station_id = nearestStation.id;

            document.getElementById("output").innerHTML = 
            `현재 위치: (${currentLocation.lat.toFixed(5)}, ${currentLocation.lon.toFixed(5)})<br>
            기상 관측소: ${nearestStation.name} (${nearestStation.lat}, ${nearestStation.lon})<br>
            거리: ${distance.toFixed(2)} km`;
            
            // 현재 위치 저장
            save_location = `${currentLocation.lat.toFixed(5)}, ${currentLocation.lon.toFixed(5)}`;

            // 기상청 데이터 가져오기
            fetchWeatherData(nearestStation.id);
  

        }, error => {
            console.error("Error getting location: ", error);
            document.getElementById("output").innerHTML = "위치를 가져오는데 실패했습니다.";
        });
    } else {
        document.getElementById("output").innerHTML = "Geolocation is not supported by this browser.";
    }
}


// 가장 가까운 기상 관측소 계산
function getNearestStation(currentLocation) {
    let nearestStation = null;
    let minDistance = Infinity;

    weatherStations.forEach(station => {
        const distance = getDistance(currentLocation, station);
        if (distance < minDistance) {
            minDistance = distance;
            nearestStation = station;
        }
    });

    return nearestStation;
}

// 두 지점 사이의 거리 계산
function getDistance(loc1, loc2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLon = toRad(loc2.lon - loc1.lon);
    const lat1 = toRad(loc1.lat);
    const lat2 = toRad(loc2.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d;
}

// 각도를 라디안으로 변환
function toRad(Value) {
    return Value * Math.PI / 180;
}

// 저장용 변수 선언
let kma_data;
let noaa_data;

// 기상청 자료 가져오기
function fetchWeatherData(stationId) {
    document.getElementById('data_status').innerHTML = "기상청 자료를 가져오는 중...";
    // const url = `../api/get_weather.php?stationId=${stationId}`;

    fetch('./get_weather.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'stationId': stationId  // POST 요청의 본문에 stationId를 포함
            }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // console.log(data);
            const weatherData = JSON.parse(data);
            if (weatherData) {
                // console.log(weatherData);

                // 데이터를 화면에 출력
                document.getElementById('weather_data_SI').innerHTML = weatherData.kma.SI;
                document.getElementById('weather_data_TA').innerHTML = weatherData.kma.TA;
                document.getElementById('weather_data_WS').innerHTML = weatherData.kma.WS;
                document.getElementById('weather_data_CA').innerHTML = weatherData.kma.CA_TOT;
                document.getElementById('weather_data_HM').innerHTML = weatherData.kma.HM;
                document.getElementById('weather_data_kmaTime').innerHTML = formatDateTime(weatherData.kma.Date,true);

                document.getElementById('weather_data_KP').innerHTML = weatherData.noaa[1];
                document.getElementById('weather_data_noaaTime').innerHTML = formatDateTime(weatherData.noaa[0],false);

                //저장용 변수에 데이터 저장
                kma_data = weatherData.kma;
                noaa_data = weatherData.noaa;

                document.getElementById('data_status').innerHTML = "기상청 자료 가져오기 성공";
            } else {
                document.getElementById('data_status').innerHTML = "데이터 추출 실패";
                console.error('데이터 추출 실패');
            }
        })
        .catch(error => {
            document.getElementById('data_status').innerHTML = "날씨 정보 가져오기 실패";
            console.error('날씨 정보 가져오기 실패 :', error);
        });
}

// 날짜 문자열을 재포맷하는 함수
function formatDateTime(dateTimeStr, isKST = true) {
    // 날짜와 시간 부분을 나눕니다
    let [date, time] = dateTimeStr.split(' ');

    // 시간 부분에서 시간과 분만 추출합니다
    let timeShort = time.substring(0, 5);

    // formattedDateTime 변수를 선언합니다
    let formattedDateTime;

    // 날짜와 축약된 시간을 (KST)와 결합합니다
    if (isKST) {
        formattedDateTime = `${date}<br>${timeShort}(KST)`;
    } else {
        formattedDateTime = `${date}<br>${timeShort}(GMT)`;
    }

    return formattedDateTime;
}

// ------------------------------------------------------------------------------------
// 측정 내용 검사
// 온도 확인
let temperatureInput = document.getElementById('temperature-manual');
temperatureInput.addEventListener('input', function() {
    let maxValue = parseFloat(temperatureInput.max);
    let minValue = parseFloat(temperatureInput.min);
    let enteredValue = parseFloat(temperatureInput.value);

    if (enteredValue > maxValue) {
        temperatureInput.value = maxValue; // 최댓값으로 설정
    } else if (enteredValue < minValue) {
        temperatureInput.value = minValue; // 최솟값으로 설정
    }
});

// 구름 범위 확인
// 0~8까지 정수로 입력 강제
let cloudInput = document.getElementById('cloud-cover-manual');
cloudInput.addEventListener('input', function() {
    let maxValue = parseFloat(cloudInput.max);
    let minValue = parseFloat(cloudInput.min);
    let enteredValue = parseFloat(cloudInput.value);

    if (enteredValue > maxValue) {
        cloudInput.value = maxValue; // 최댓값으로 설정
    } else if (enteredValue < minValue) {
        cloudInput.value = minValue; // 최솟값으로 설정
    } else if (!Number.isInteger(enteredValue)) {
        cloudInput.value = Math.round(enteredValue); // 정수로 반올림
    }
});

// 습도 확인
let humidityInput = document.getElementById('humidity-manual');
humidityInput.addEventListener('input', function() {
    let maxValue = parseFloat(humidityInput.max);
    let minValue = parseFloat(humidityInput.min);
    let enteredValue = parseFloat(humidityInput.value);

    if (enteredValue > maxValue) {
        humidityInput.value = maxValue; // 최댓값으로 설정
    } else if (enteredValue < minValue) {
        humidityInput.value = minValue; // 최솟값으로 설정
    }
});

// 풍속 확인
let windSpeedInput = document.getElementById('wind-speed-manual');
windSpeedInput.addEventListener('input', function() {
    let minValue = parseFloat(windSpeedInput.min);

    if (parseFloat(windSpeedInput.value) < minValue) {
        windSpeedInput.value = minValue; // 최솟값으로 설정
    }
});

// ------------------------------------------------------------------------------------
// 저장 버튼 클릭 시 실행되는 데이터 저장 함수
function saveData() {
    let manualDataCells = document.querySelectorAll('.manual_data');
    let autoDataCells = document.querySelectorAll('.auto_data');
    let locationCell = document.getElementById('current_place');

    let isEmpty = false;

    // 장소 입력 검사
    if (!locationCell.value.trim()) {
        alert("장소를 입력해주세요.");
        return;
    }

    // manual_data 클래스를 가진 셀 검사
    manualDataCells.forEach(input => {
        if (input.value.trim() === '') {
            isEmpty = true;
            input.style.backgroundColor = '#ffcc99'; // 빈 값이 있는 입력 필드는 오렌지 배경으로 표시
        } else {
            input.style.backgroundColor = ''; // 다시 기본 배경으로 변경
        }
    });

    // auto_data 클래스를 가진 셀 검사
    autoDataCells.forEach(cell => {
        if (cell.textContent.trim() === '') {
            isEmpty = true;
            cell.style.backgroundColor = '#ffcc99'; // 빈 값이 있는 입력 필드는 오렌지 배경으로 표시
        } else {
            cell.style.backgroundColor = ''; // 다시 기본 배경으로 변경
        }
    });

    // 확인 창에 사용할 메시지 설정
    let confirmationMessage = 
        isEmpty ? '빈 값이 있는 항목이 있습니다. 저장하시겠습니까?' : '저장하시겠습니까?';

    // 빈 값이 있는 경우 확인 창을 띄워 사용자에게 확인을 받습니다.
    let confirmSave = confirm(confirmationMessage);

    if (confirmSave) {
        let manual_data = document.querySelectorAll('.manual_data');
        let manual_datas = {
            SI: manual_data[0].value,
            TA: manual_data[1].value,
            WS: manual_data[2].value,
            CA: manual_data[3].value,
            HM: manual_data[4].value,
            PVCT: manual_data[5].value
        };
        location_name = document.getElementById('current_place').value;
        let datas = {
            date_data,// 저장 시간
            location_name, // 발전소 이름
            save_location, // 저장 위치
            station_id, // 기상 관측소 ID
            kma_data,  // 관측소 데이터
            noaa_data, // 자기장 데이터
            manual_datas // 수기 데이터
        }
        // console.log(datas);

        fetch('./record_csv.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({action:'save', data: datas}),
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if(data.success){
                alert('데이터가 성공적으로 저장되었습니다.');
                window.location.reload();
            } else {
                alert('데이터 저장에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('데이터 저장에 실패했습니다.');
        });
    } 
}


// ------------------------------------------------------------------------------------
// 현재시간을 나타내는 함수
// 저장용 시간 변수
let date_data = null;

// 현재 시각을 표시하는 함수
let lastDisplayedMinute = null;

function updateCurrentDate() {
    let currentDate = new Date();
    let currentMinute = currentDate.getMinutes();

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    // 이전에 표시된 분이 없거나 이전 분과 현재 분이 다를 때만 업데이트
    if (lastDisplayedMinute === null || lastDisplayedMinute !== currentMinute) {
        // 원하는 형식으로 날짜와 시간을 포맷합니다 (예: YYYY-MM-DD HH:mm)
        let formattedDate = `현재시간: ${currentDate.getFullYear()}-${padZero(currentDate.getMonth() + 1)}-${padZero(currentDate.getDate())} ${padZero(currentDate.getHours())}:${padZero(currentMinute)}`;

        // 저장용 시간 
        date_data = `${currentDate.getFullYear()}-${padZero(currentDate.getMonth() + 1)}-${padZero(currentDate.getDate())} ${padZero(currentDate.getHours())}:${padZero(currentMinute)}`

        // span 요소에 현재 시각을 표시합니다
        document.getElementById('current_date').textContent = formattedDate;

        // 현재 분을 마지막으로 표시된 분으로 설정
        lastDisplayedMinute = currentMinute;
    }
}

// 페이지가 로드될 때와 1분마다 현재 시각을 업데이트합니다
window.onload = function() {
    updateCurrentDate(); // 페이지 로드 시 한 번 업데이트
    setInterval(updateCurrentDate, 1000); // 1초마다 업데이트
};

// ------------------------------------------------------------------------------------
// 목록 검색 기능
// 임의의 장소 목록
const places = [];

const input = document.getElementById('current_place');
const list = document.getElementById('place_list');

// 저장되어있는 장소들 목록 가져오기
fetch('./record_csv.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ action: 'place' }),
})
.then(response => response.json())
.then(data => {
    // console.log(data);
    if (data.success) {
        // 데이터를 목록에 추가
        data.places.forEach(place => {
            places.push(place);
        });
    } else {
        alert('데이터 가져오기 실패');
    }
})

// 초기 목록 표시 함수
function showAllPlaces() {
    list.innerHTML = '';
    places.forEach(place => {
        const li = document.createElement('li');
        li.textContent = place;
        list.appendChild(li);
    });
    list.style.display = 'block';
}

// 입력 상자에 포커스가 갈 때 모든 목록을 표시
input.addEventListener('focus', showAllPlaces);

// 입력 내용에 따라 목록 필터링
input.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredPlaces = places.filter(location =>
        location.toLowerCase().includes(searchText)
    );

    list.innerHTML = '';
    filteredPlaces.forEach(location => {
        const li = document.createElement('li');
        li.textContent = location;
        list.appendChild(li);
    });

    list.style.display = filteredPlaces.length > 0 ? 'block' : 'none';
});

// 목록에서 항목을 클릭했을 때 입력 상자에 선택한 항목을 채움
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        input.value = event.target.textContent;
        list.style.display = 'none';
    }
});

// 다른 곳을 클릭했을 때 목록을 숨김
document.addEventListener('click', function(event) {
    if (!event.target.matches('#current_place') && !event.target.matches('#place_list li')) {
        list.style.display = 'none';
    }
});

// ------------------------------------------------------------------------------------

// 장소에 대한 데이터 조회 함수
function searchPlaceData() {
    const currentPlaceElement = document.getElementById('current_place');

    let place = currentPlaceElement ? currentPlaceElement.value : searchPlace;

    fetch('./record_csv.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'searchPlace', place: place}),
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        if (data.success) {
            // 데이터를 테이블이나 리스트로 표시
            searchPlace = place;
            displaySearchResults(data.records);
        } else {
            alert('데이터 조회에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('데이터 조회에 실패했습니다.');
    });
}

function displaySearchResults(records) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (records.length === 0) {
        resultsContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
    } else {
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>날짜</th>
                <th>장소</th>
                <th></th>
            </tr>
        `;

        records.forEach(record => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${record.id}</td>
                <td>${record.date}</td>
                <td>${record.place}</td>
                <td>
                    <button class="icon-button" onclick="loadRecord('${record.id}')">
                        <img src="./open-icon.svg" alt="불러오기">
                    </button>
                    <button class="icon-button" onclick="deleteRecord('${record.id}')">
                        <img src="./delete-icon.svg" alt="삭제하기">
                    </button>
                </td>
            `;
        });

        resultsContainer.appendChild(table);
    }

    // 모달 표시
    const modal = document.getElementById('searchModal');
    modal.style.display = 'block';
}


// ------------------------------------------------------------------------------------
// 선택한 기록 불러오기 함수
function loadRecord(id) {
    fetch('./record_csv.php', {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'searchId', id: id }),
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        if (data.success) {
            // 데이터를 입력 필드에 채움
            const datas = data.records;
            // console.log(datas);

            // 숨겨진 input에 id 저장
            document.getElementById('recordId').value = id;

            // 버튼과 입력 요소 숨기기
            document.querySelector('.staion_button').style.display = 'none';
            document.getElementById('current_place').style.display = 'none';
            document.getElementById('search_button').style.display = 'none';
            document.getElementById('saveButtonDiv').style.display = 'none';

            // 기상 관측소 데이터 숨기기
            document.getElementById('output').style.display = 'none';
            document.getElementById('data_status').style.display = 'none';


            // 기록 세부 정보 표시
            document.querySelectorAll('.recordDetails').forEach(el => el.style.display = 'block');

            // 기록 시간 및 위치 표시
            document.getElementById('place_display').textContent = datas.place;
            document.getElementById('time_display').textContent = datas.date;
            document.getElementById('location_display').textContent = datas.location ? datas.location : 'No data';
            
            // 관측소 이름 찾기
            const station = weatherStations.find(station => station.id == datas.station_id);
            document.getElementById('station_display').textContent = station ? station.name : 'No data';

            // 자동 측정 데이터 표시
            document.getElementById('weather_data_SI').textContent = datas.kma_data.SI;
            document.getElementById('weather_data_TA').textContent = datas.kma_data.TA;
            document.getElementById('weather_data_WS').textContent = datas.kma_data.WS;
            document.getElementById('weather_data_CA').textContent = datas.kma_data.CA_TOT;
            document.getElementById('weather_data_HM').textContent = datas.kma_data.HM;
            document.getElementById('weather_data_KP').textContent = datas.noaa_data.Kp;

            // 측정 시간 표시
            document.getElementById('weather_data_kmaTime').textContent = datas.date;
            document.getElementById('weather_data_noaaTime').textContent = datas.noaa_data.Date;

            // 수기 측정 데이터 표시 및 입력 비활성화
            const manualInputs = {
                'irradiance-manual': datas.manual_datas.SI,
                'temperature-manual': datas.manual_datas.TA,
                'wind-speed-manual': datas.manual_datas.WS,
                'cloud-cover-manual': datas.manual_datas.CA,
                'humidity-manual': datas.manual_datas.HM,
                'pv-contamination-manual': datas.manual_datas.PVCT
            };

            Object.entries(manualInputs).forEach(([id, value]) => {
                const input = document.getElementById(id);
                input.value = value;
                input.disabled = true;
            });



        } else {
            alert('데이터 불러오기에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('데이터 불러오기 중 오류가 발생했습니다.');
    });
    closeModal();
}


// ------------------------------------------------------------------------------------
// 선택한 기록 삭제 함수
function deleteRecord(id) {
    if (!id) {
        // id가 없는 경우 숨겨진 input에서 id를 가져옵니다.
        id = document.getElementById('recordId').value;
    }

    if (confirm('정말로 이 레코드를 삭제하시겠습니까?')) {
        fetch('./record_csv.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'delete', id: id }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('레코드가 삭제되었습니다.');
                searchPlaceData(); // 검색 결과 새로고침
            } else {
                alert('레코드 삭제에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('레코드 삭제에 실패했습니다.');
        });
    }
}

// ------------------------------------------------------------------------------------
// 모달 닫기 기능
function closeModal() {
    const modal = document.getElementById('searchModal');
    modal.style.display = 'none';
}
const modal = document.getElementById('searchModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// ------------------------------------------------------------------------------------
// 홈버튼
function goHome() {
    location.reload();
}


// // 정보 아이콘 클릭 이벤트 리스너
// document.addEventListener('DOMContentLoaded', function() {
//     const infoIcon = document.getElementById('info-icon');
//     const infoModal = document.getElementById('info-modal');
//     const closeButton = document.querySelector('#info-modal .close-button');

//     // 정보 아이콘 클릭 시 모달 열기
//     infoIcon.addEventListener('click', function() {
//         infoModal.style.display = 'block';
//     });

//     // 닫기 버튼 클릭 시 모달 닫기
//     closeButton.addEventListener('click', function() {
//         infoModal.style.display = 'none';
//     });

//     // 모달 외부 클릭 시 모달 닫기
//     window.addEventListener('click', function(event) {
//         if (event.target == infoModal) {
//             infoModal.style.display = 'none';
//         }
//     });
// });