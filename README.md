## 💾 설치

**1. 우측 링크에 접속하여 <span style="color: white; background-color: #026e00">&nbsp;Node.js&nbsp;</span> 다운로드(LTS 버전)**
**https://nodejs.org/ko/**

**2. 설치 완료 후 Terminal에서 `npm -v` 명령어를 입력하여 <span style="color: black; background-color: yellow">설치 완료</span> 및 버전 확인**

**3. Terminal에서 `npm install npx` 명령어를 입력하여 npx 설치**

**4. Terminal에서 `npx create-react-app 프로젝트명` 명령어를 입력해 줍니다.**

이때, 프로젝트명은 **영문자** 및 **숫자**, 특정 문자(- 또는 \_)를 포함하여<br />
구성할 수 있으며 (e.g. **`my-app`** 또는 **`my_app`**), 설치 완료까지
시간이 어느 정도 소요됩니다.

&nbsp;

**5. Terminal에서 `npm i firebase@9.6.1` 및 `npm i react-router-dom@5.3.0` 명령어 입력**

**?. Terminal에서 `npm i @fortawesome/fontawesome-svg-core` 명령어를 입력하여 설치**

**?. Terminal에서 다음 명령어 입력하여 설치**
**`npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons`**


**?. Terminal에서 `npm i @fortawesome/react-fontawesome` 명령어를 입력하여 설치**

---

**6. 프로젝트 폴더 내부 src폴더 안에서 App.js 및 index.js 파일을 제외한 잔여 파일 전부 제거**

![image](https://user-images.githubusercontent.com/56868605/181263383-218b7315-2393-416a-97ed-9e03a1824e6a.png)

---

## ⚙️ 설정

**7. https://firebase.google.com/ 주소로 이동하여 구글 계정으로 로그인 후 `시작` 버튼 클릭**

![스크린샷 2022-07-27 오후 11 17 23](https://user-images.githubusercontent.com/56868605/181271373-330a80f1-723e-4dbb-bb5f-23a2912ebf00.png)


**8. `프로젝트 추가` 클릭**

![스크린샷 2022-07-27 오후 11 18 39](https://user-images.githubusercontent.com/56868605/181271417-6dc6d492-aaf5-4022-829a-d5c6d3288606.png)


**9. 프로젝트 이름 지정 후 다음**

![스크린샷 2022-07-27 오후 11 19 05](https://user-images.githubusercontent.com/56868605/181271509-1c333b12-c78e-4f88-a348-b54b806bb001.png)


**10. `이 프로젝트에서 Google 애널리틱스 사용 설정` 을 끈 후 `프로젝트 만들기` 클릭**

![스크린샷 2022-07-27 오후 11 20 27](https://user-images.githubusercontent.com/56868605/181271702-429d6fe2-4f8d-4e07-8fbe-d4f0b81a3a26.png)

**11. 새 프로젝트가 준비된 후 `계속` 클릭**

![스크린샷 2022-07-27 오후 11 24 00](https://user-images.githubusercontent.com/56868605/181273874-ecab0cca-b84d-489c-a9b4-80f6e1d7f296.png)

**12. `웹` 클릭**

![스크린샷 2022-07-27 오후 11 24 57](https://user-images.githubusercontent.com/56868605/181274102-54715e14-6658-4613-a25e-4ce328c343a2.png)

**13. 앱 닉네임 작성 후 `앱 등록` 클릭**

![스크린샷 2022-07-27 오후 11 26 10](https://user-images.githubusercontent.com/56868605/181274320-4e293b3b-7bec-4a64-884a-bdcca435983a.png)

**14. 코드를 별도로 저장한 후 `콘솔로 이동` 클릭**

![스크린샷 2022-07-27 오후 11 29 18](https://user-images.githubusercontent.com/56868605/181275478-c8f4e5fe-2c6c-4fba-8f06-c31596780533.png)

**?. `Authentication` 클릭 후 `시작하기` 클릭**

![스크린샷 2022-07-27 오후 11 40 58](https://user-images.githubusercontent.com/56868605/181396742-3cfccbea-799e-4cf9-8eb2-320af9a151a7.png)
![스크린샷 2022-07-27 오후 11 41 20](https://user-images.githubusercontent.com/56868605/181396800-254c92ff-2259-4a0d-8c4e-e8bad9422bfc.png)

**?. 다음의 세 가지(이메일/비밀번호, Google, Github) 로그인 제공업체 설정**

![스크린샷 2022-07-27 오후 11 41 48](https://user-images.githubusercontent.com/56868605/181395700-03ace689-9a3f-448b-9f6b-d67f97d112da.png)

**?. `이메일/비밀번호` 는 다음과 같이 설정한 후 `저장` 클릭**

![스크린샷 2022-07-27 오후 11 43 20](https://user-images.githubusercontent.com/56868605/181395865-0362377d-03f0-44df-a4d0-85b331a7856f.png)


**?. `Google` 은 `프로젝트 지원 이메일` 을 선택한 후 `저장` 클릭**

![스크린샷 2022-07-27 오후 11 44 21](https://user-images.githubusercontent.com/56868605/181395990-a5e601d9-d627-4322-84f6-34b55d3becd2.png)


**?. `Github` 는 별도의 ID값을 생성해야 하기 때문에 Github 홈페이지에서 로그인 후 `Settings` → `Developer settings`**

![스크린샷 2022-07-27 오후 11 45 30](https://user-images.githubusercontent.com/56868605/181396552-275079d1-ec50-4710-998d-94c75ad65d03.png)
![스크린샷 2022-07-27 오후 11 46 08](https://user-images.githubusercontent.com/56868605/181407999-6d3ff3be-62a3-40c5-a099-fd7f9b12c7e3.png)

**?. **
