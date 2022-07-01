# 트리플 과제전형
[배포 주소로 접속하기!](https://celadon-cascaron-50e3ce.netlify.app/)
## 목차
1. 커밋 컨벤션
2. 프로젝트 실행 방법
3. 사용한 기술과 선택한 이유

<br />

## 1. 커밋 컨벤션

| 이모지 | 의미 |
|---|:---:|
| :tada: | 프로젝트 세팅 | 
| :lipstick: | UI 업데이트 및 스타일 변경 |
| :label: | 타입 추가, 수정 |
| :bug: | 버그(오류) 수정 |
| :fire: | 코드 및 파일 제거 |
| :construction: | 작업 진행중 |
| :recycle: | 코드 리팩토링 |
| :truck: | 파일 위치 이동 및 파일명 변경 |
| :bento: | assets 추가 및 수정 |
| :mag: | SEO 최적화 작업 |
| :dizzy: | 애니메이션 및 트랜지션 추가 및 수정 작업 |
| :sparkles: | 기능 개발 |
| :rocket: | 배포 작업 |
| :pencil: | 문서 작업 |

## 2. 프로젝트 실행 방법

1. 저장소 클론을 통해 로컬에 가지고 오기
```
git clone git@github.com:silent10z/tripe-front-assginment.git
```
2. package.json을 이용하여 package install
```
npm install
```
3. development 실행하기 or 빌드 후 production 실행하기
```
development 실행하기

npm run dev () 

----------------------

빌드 후 production 실행하기

npm run build
npm start
```

<br />

## 3. 사용한 기술과 선택한 이유
### 사용한 기술
TypeScript, Next.js, Emotion

<br />

### 선택 이유
#### TypeScript 
> 정적 타입 검사를 통해 개발자의 실수와 오류를 줄 일 수 있고 다른 사람들이 내가 작성한 코드를 볼 때 타입을 통해 코드를 쉽고 빠르게 파악할 수 있기 때문에 타입스크립트를 사용하였습니다.

#### Next.js
> 과제의 내용은 트리플 홈페이지의 하나의 섹션 부분이지만 실제 트리플 페이지는 서비스를 소개하는 페이지로서 SEO에 최적화가 중요한 부분이라고 생각해서 React 보다 SEO를 최적화가 쉬운 Next.js를 통해 빌드 시에 페이지를 만들어서 배포하기 위해 Next.js를 선택하여 사용하였습니다.

#### Emotion
> Emotion을 선택한 이유는 CSS-In-Js 를 통해서 javascript 환경에서 상수와 함수를 공유할 수 있기 때문에 선택하였고 styled-components와 Emotion의 용량 차이와 속도 차이가 큰 차이가 없기 때문에 Next.js에서 SSR 특별한 설정이 필요없는 Emotion을 선택하였습니다.
