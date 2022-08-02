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

**6. Terminal에서 `npm i @fortawesome/fontawesome-svg-core` 명령어를 입력하여 설치**

**7. Terminal에서 다음 명령어 입력하여 설치**
**`npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons`**

**8. Terminal에서 `npm i @fortawesome/react-fontawesome` 명령어를 입력하여 설치**

**9. `npm i gh-pages` 명령어를 입력하여 설치**

---

**10. 프로젝트 폴더 내부 src폴더 안에서 App.js 및 index.js 파일을 제외한 잔여 파일 전부 제거**

![image](https://user-images.githubusercontent.com/56868605/181263383-218b7315-2393-416a-97ed-9e03a1824e6a.png)

---

## ⚙️ 설정

**11. https://firebase.google.com/ 주소로 이동하여 구글 계정으로 로그인 후 `시작` 버튼 클릭**

![스크린샷 2022-07-27 오후 11 17 23](https://user-images.githubusercontent.com/56868605/181271373-330a80f1-723e-4dbb-bb5f-23a2912ebf00.png)

**12. `프로젝트 추가` 클릭**

![스크린샷 2022-07-27 오후 11 18 39](https://user-images.githubusercontent.com/56868605/181271417-6dc6d492-aaf5-4022-829a-d5c6d3288606.png)

**13. 프로젝트 이름 지정 후 다음**

![스크린샷 2022-07-27 오후 11 19 05](https://user-images.githubusercontent.com/56868605/181271509-1c333b12-c78e-4f88-a348-b54b806bb001.png)

**14. `이 프로젝트에서 Google 애널리틱스 사용 설정` 을 끈 후 `프로젝트 만들기` 클릭**

![스크린샷 2022-07-27 오후 11 20 27](https://user-images.githubusercontent.com/56868605/181271702-429d6fe2-4f8d-4e07-8fbe-d4f0b81a3a26.png)

**15. 새 프로젝트가 준비된 후 `계속` 클릭**

![스크린샷 2022-07-27 오후 11 24 00](https://user-images.githubusercontent.com/56868605/181273874-ecab0cca-b84d-489c-a9b4-80f6e1d7f296.png)

**16. `웹` 클릭**

![스크린샷 2022-07-27 오후 11 24 57](https://user-images.githubusercontent.com/56868605/181274102-54715e14-6658-4613-a25e-4ce328c343a2.png)

**17. 앱 닉네임 작성 후 `앱 등록` 클릭**

![스크린샷 2022-07-27 오후 11 26 10](https://user-images.githubusercontent.com/56868605/181274320-4e293b3b-7bec-4a64-884a-bdcca435983a.png)

**18. 코드를 별도로 저장한 후 `콘솔로 이동` 클릭**

![스크린샷 2022-07-27 오후 11 29 18](https://user-images.githubusercontent.com/56868605/181275478-c8f4e5fe-2c6c-4fba-8f06-c31596780533.png)

**19. `Authentication` 클릭 후 `시작하기` 클릭**

![스크린샷 2022-07-27 오후 11 40 58](https://user-images.githubusercontent.com/56868605/181396742-3cfccbea-799e-4cf9-8eb2-320af9a151a7.png)
![스크린샷 2022-07-27 오후 11 41 20](https://user-images.githubusercontent.com/56868605/181396800-254c92ff-2259-4a0d-8c4e-e8bad9422bfc.png)

**20. 다음의 세 가지(이메일/비밀번호, Google, Github) 로그인 제공업체 설정**

![스크린샷 2022-07-27 오후 11 41 48](https://user-images.githubusercontent.com/56868605/181395700-03ace689-9a3f-448b-9f6b-d67f97d112da.png)

**21. `이메일/비밀번호` 는 다음과 같이 설정한 후 `저장` 클릭**

![스크린샷 2022-07-27 오후 11 43 20](https://user-images.githubusercontent.com/56868605/181395865-0362377d-03f0-44df-a4d0-85b331a7856f.png)

**22. `Google` 의 제공업체 구성은 `사용 설정` 활성화 후 `프로젝트 지원 이메일` 을 선택한 후 `저장` 클릭**

![스크린샷 2022-07-27 오후 11 44 21](https://user-images.githubusercontent.com/56868605/181409286-158bab62-d306-4e47-b116-93cd9c26a521.png)

**23. `Github` 는 별도의 ID값을 생성해야 하기 때문에 Github 홈페이지에서 로그인 후 `Settings` → `Developer settings` → `OAuth Apps`**

![스크린샷 2022-07-27 오후 11 45 30](https://user-images.githubusercontent.com/56868605/181396552-275079d1-ec50-4710-998d-94c75ad65d03.png)
![스크린샷 2022-07-27 오후 11 46 08](https://user-images.githubusercontent.com/56868605/181407999-6d3ff3be-62a3-40c5-a099-fd7f9b12c7e3.png)
![스크린샷 2022-07-27 오후 11 46 41](https://user-images.githubusercontent.com/56868605/181408492-c906f9aa-ed4e-4d13-ba17-acea606a9cc4.png)

**24. `New OAuth App` 클릭**

![스크린샷 2022-07-27 오후 11 47 13](https://user-images.githubusercontent.com/56868605/181408554-a467101a-ebcd-4eb1-b42a-208ef7464b2f.png)

**25. Firebase의 Github 제공업체 구성 창에서 `사용 설정` 활성화 후 하단의 URL 복사**

![스크린샷 2022-07-27 오후 11 48 00](https://user-images.githubusercontent.com/56868605/181408658-71eb62c0-95e9-40a4-bf77-2be4d9b2b683.png)

**26. 다시 Github의 OAuth 추가 페이지로 돌아와 방금 전 Firebase에서 복사하였던 URL을 다음 사진과 같이 입력 폼에 알맞은 주소 형태로 붙여 넣은 후 `Register application` 클릭**

> e.g. Homepage URL : https://fbase-authentication-format.firebaseapp.com

> e.g. Authorization callback URL : https://fbase-authentication-format.firebaseapp.com/__/auth/handler

![스크린샷 2022-07-27 오후 11 48 43](https://user-images.githubusercontent.com/56868605/181409318-d816b8a7-46d5-4896-a969-02d79baffca4.png)

**27. `Generate a new client secret` 클릭 후 생성된 Client ID와 Client secrets 값을 복사한 후 Firebase 입력 폼에 각각 붙여 넣은 후 `저장`**

![스크린샷 2022-07-27 오후 11 49 44](https://user-images.githubusercontent.com/56868605/181410177-af8ba182-ddcb-484c-b4e6-e8547fd17676.png)

**28. 밑 사진과 같이 세 가지(이메일/비밀번호, 구글, 깃허브) 로그인 제공업체 추가가 정상적으로 완료된 것을 확인**

![스크린샷 2022-07-27 오후 11 50 35](https://user-images.githubusercontent.com/56868605/181410550-518b3cc7-6f08-4476-a106-d8ae401dd3dd.png)

---

## 💻 파일 생성 및 작성

**29. 다시 에디터로 돌아와서 프로젝트 폴더 바로 하위에 `.env` 파일을 생성 후 사진과 같이 입력**<br />
(.env 파일은 반드시 프로젝트 폴더 바로 하위에 생성하셔야 하며, 가린 값은 ??번에서 저장했던 값을 각각 넣어 주시면 됩니다)

![스크린샷 2022-07-28 오전 9 16 24](https://user-images.githubusercontent.com/56868605/181410736-dee6305c-fbb8-4259-bb99-8cbaa89b7d5d.png)
![스크린샷 2022-07-28 오전 9 20 48](https://user-images.githubusercontent.com/56868605/181412214-95dff482-58f1-4a00-b854-e5a4f2d392d9.png)

**30. src 폴더 하단에 `fbase.js` 파일을 생성한 후 fbase-authentication-format 저장소에 있는 `fbase.js` 코드를 복사한 후 붙여넣기**

![스크린샷 2022-07-28 오전 9 18 44](https://user-images.githubusercontent.com/56868605/181412522-8652cad7-7fb0-4364-9ae5-af8203b97720.png)

**31. 프로젝트 폴더 내부 `.gitignore` 파일 하단에 `.env` 추가**

![스크린샷 2022-07-28 오후 12 16 39](https://user-images.githubusercontent.com/56868605/181413091-655ca8f6-4647-4306-87e7-342eb42ffca1.png)

**32. src 폴더 하단에 `components` & `routes` 폴더 생성 후 fbase-authentication-format 저장소에 있는 모든 코드 파일을 개인 프로젝트 폴더에 복제**

![스크린샷 2022-07-28 오후 12 30 15](https://user-images.githubusercontent.com/56868605/181414331-a09c88c6-3a5b-45de-975d-e1fe9d82da95.png)

---

**33. package.json파일 하단에 밑 문장 추가**
**`"homepage": "https://yourname.github.io/project_name/"`**

scripts 부분에 **`"deploy": "gh-pages -d build"`** 및 **`"predeploy": "npm run build"`** 추가<br />
(deploy명령어 실행 전 predeploy 명령어를 실행하여 build과정을 거친 후 deploy 명령어를 실행하는 원리)

터미널에 **`npm run deploy`** 명령어 입력
(-d build 옵션을 추가한 이유는 predeploy명령어로 인해 build라는 폴더가 생성되는데 이 build폴더를 토대로 deploy하라는 의미)

![스크린샷 2022-07-28 오후 12 35 29](https://user-images.githubusercontent.com/56868605/181415239-e9f765b7-291c-46b5-828a-fbbfbe6e143d.png)

---

**34. Cloud Firestore 클릭 후 `데이터베이스 만들기` 클릭**

![스크린샷 2022-08-01 오후 11 22 49](https://user-images.githubusercontent.com/56868605/182175315-815ced1e-0e20-4075-84ad-d7d308153167.png)
![스크린샷 2022-08-01 오후 11 26 07](https://user-images.githubusercontent.com/56868605/182175431-9e95095d-7f42-43e9-9a34-536e0c04f076.png)

**35. Cloud Firestore 위치를 `asia-northeast3` 로 선택 후 `사용 설정` 클릭**

![스크린샷 2022-08-01 오후 11 34 42](https://user-images.githubusercontent.com/56868605/182175469-b9026f15-d2d0-4a4f-b066-6ef22b07df8d.png)

**36. `규칙` 메뉴에 들어가 밑 사진과 같이 수정**

![스크린샷 2022-08-01 오후 11 43 40](https://user-images.githubusercontent.com/56868605/182175848-58689b42-3c91-4170-b1ef-af8197debdab.png)

**37. Authentication의 `Settings` 메뉴에 들어가 `도메인 추가` 클릭 후 밑 사진과 같이 `Github이름.github.io` 입력 후 `추가` 클릭**

![스크린샷 2022-08-01 오후 11 17 22](https://user-images.githubusercontent.com/56868605/182176321-5fdb8163-5c3f-4fc3-bee5-217705ecd7b8.png)

---

**38. `https://console.developers.google.com/apis/credentials` 로 접속**

**39. 페이지 좌측 상단의 메뉴에서 Firebase에서 생성한 프로젝트를 선택합니다.**

![스크린샷 2022-08-01 오후 11 50 18](https://user-images.githubusercontent.com/56868605/182289990-7baa63cb-ab4f-44ad-b40a-b9aa46d4d81c.png)
![스크린샷 2022-08-01 오후 11 49 51](https://user-images.githubusercontent.com/56868605/182290054-bb5f3a1f-64d3-4562-ab84-7cb303c296c1.png)
![스크린샷 2022-08-01 오후 11 50 45](https://user-images.githubusercontent.com/56868605/182290069-19d6d433-034a-49a0-b250-37cd45ee3d76.png)

**40. Google Cloud의 `API및 서비스` → `사용자 인증 정보` → `Browser key(auto created by Firebase)` 클릭**

![스크린샷 2022-08-01 오후 11 52 03](https://user-images.githubusercontent.com/56868605/182290439-e3af3fb5-993e-4ce9-ae91-15d78e23b8f9.png)

**41. `어플리케이션 제한사항` 은 `HTTP 리퍼러(웹사이트)` , `웹 사이트 제한사항` 은 밑 사진과 같이 설정(.../*)를 꼭 붙여주셔야 하고, `저장` 클릭`**

<img width="381" alt="스크린샷 2022-08-02 오후 2 48 42" src="https://user-images.githubusercontent.com/56868605/182301459-509f7bbe-f180-49a6-958a-9b823a87a183.png">
