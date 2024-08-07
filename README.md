# drone_flying_record

**개발 기간**: 2024-07-03 ~ 2024-07-23

## 개요

드론 비행 시 작성해야 하는 현장의 비행기록부를 수기가 아닌 모바일 기기를 통해 작성할 수 있게 개발했습니다. 웹페이지를 기반으로 클라이언트의 위치를 받아 가장 가까운 기상관측소의 기상데이터와 미국 해양대기청의 자기장 지수 데이터를 받아옵니다. 필요시 수기 작성도 가능합니다.

## 개발 과정

- **초기 기획**

수기 작성 양식에 따라 입력할 데이터를 확인했습니다.


- **기초 개발**

처음엔 간단한 프로젝트라고 생각하여 HTML 파일 내부에 스크립트를 넣어 개발하려 했습니다.

이후, HTML, CSS, JS를 분리하고 컴퓨터 화면에 맞춰 입력 양식을 구성했습니다.

- **스타일링 및 반응형 디자인**

CSS를 간단하게 꾸미고 현장에서 모바일 기기를 사용할 가능성이 높아 모바일에 대응되도록 CSS를 수정했습니다.

- **API 활용**

기상청의 API를 찾고, 실시간 기상 데이터가 필요하여 지상관측 시간자료 API를 사용 신청하고 회사 명의의 API 키를 받아왔습니다. 

자기장 데이터는 미국 해양대기청의 KP 지수 API를 이용했습니다.


- **데이터 처리**

기상청 자료의 단위를 회사에서 사용하는 단위로 변경하고, 수기 입력 시 입력값을 제한했습니다. 

저장 시 PHP 파일에 요청하여 CSV 파일로 저장하게끔 구현했습니다. 

연간 비행 횟수가 많지 않기에 DB 대신 CSV 파일로 저장합니다.


- **장소 및 위치 통일**

코드내에서 위치와 장소를 `location`과 `place`로 통일했습니다. 

서버 접속 시 자동으로 CSV 파일에 있는 장소들을 받아오게 했습니다. 

장소를 기준으로 한 검색 기능을 개발했습니다.


- **폼 자동 채우기**

검색 내용을 불러오면 입력창을 비활성화 시키고 저장된 내용으로 양식을 자동 채우게 했습니다.


- **서버 적용**

코드를 완성하고 회사의 시놀로지 서버에 적용했습니다. 

시놀로지 DSM을 사용하여 PHP와 Web Station을 설치하고, Web Station을 통해 회사에서 기존에 사용중인 도메인을 적용하여 HTTPS를 통해 호스팅했습니다.

클라이언트 위치 보안 문제로 HTTPS를 사용한 호시팅만 사용 가능합니다.


- **문제 해결**

기상청 데이터 처리 과정에서 오류가 발생하여 PHP 설정에서 오류 로그를 활성화하고 로그 파일의 위치를 지정했습니다. 

HTTPS 보안 문제로 거절되는 것을 발견하여 PHP 설정을 수정하고 재부팅했으나 문제가 해결되지 않았습니다. 

오류 로그를 통하여 문제를 파악한 결과, Web Station의 PHP 8.2 설정 중 확장 탭의 OpenSSL과 Curl 사용 여부가 문제였습니다. 

회사의 시놀로지 관리자 접속 권한을 얻어 위의 설정을 활성화하자 접속과 저장이 정상적으로 작동했습니다.

## 기상 정보 출처

- **기상청**: https://apihub.kma.go.kr
  - **API**: https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php?stn=[기상관측소]&authKey=[API키값]
  - **지상 관측 시간자료**: 1시간 간격
    - **일사량**: 기상청 관측 단위 MJ/m² >> W/m²로 변경
    - **구름 범위**: 기상청 관측 범위 1/10 >> Okta 1/8로 변경

- **NOAA**: https://www.swpc.noaa.gov/products/planetary-k-index
  - **API**: https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json
  - **자기장 관측 시간자료**: 3시간 간격

## 참고사항

- **지구자기장 관측 데이터**: https://spaceweather.kasa.go.kr/obsenv3.do
