## [디스코드 봇개발 배워서 창업해보기 - 9주 코스]

## ![img](https://cdn.discordapp.com/attachments/1019611429566943242/1022716877195190353/banner.png)

# 1주차 [js기초] js + node.js

> 학습목표

> > node.js
> >
> > - node.js에 대한 이해
> > - node.js설치 완료
> > - node.js사용법

> > JavaScript
> >
> > - 자료형에 대한 이해
> > - 변수에 대한 이해
> > - 배열에 대한 이해
> > - 함수에 대한 이해
> > - 조건문과 반복문에 대한 이해
> > - \*optional : object에 대한 이해

---

## node.js

<img src="https://nodejs.org/static/images/logo.svg" width = "300">

#### **`node.js`란?**

Chrome에서 사용하는 Javascript 해석 엔진인 V8엔진을 따로 빼서 동작하는 Javascript Runtime(실행환경)

#### **설치**

- window : [node.js홈페이지](https://nodejs.org/ko/)
- mac :

1. brew 설치

```
xcode-select --install
```

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. wget설치

```
brew install wget
```

3.  nvm 설치

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

4. 명령어로 설치

```
nvm install 16.17.0
```

`node -v` 로 설치 확인

helloNode.js 파일 생성 후 node.js로 실행시키기

```js
//helloNode.js
console.log(`Hello, Node!`);
```

---

- ### 자료형 ( Data Types )
  - number : 숫자 ( 1, 2, 3, 0.1, 0.2, -1, -2)
  - string : 문자열 ('hello', 'ggomagang', 'a', 'b')
    - \*스트링 형식의 값을 나타낼 때에는 따옴표를 붙여줘야한다.
  - boolean : 참 or 거짓 (true,1,false,0)
  - null : 아무 값도 아님
  - undefined : 아무 것도 없음
  - NaN : 숫자가 아님

```js
typeof()
```

<img src="https://postfiles.pstatic.net/MjAyMjA0MDVfMTAz/MDAxNjQ5MTU4MjIyOTU1._zVJQkUknC4kY3SJGlZFPjXoU_97gXZ6Hrg1tw5tO5Eg.6oSzEm4eU6vgYBINimfl-T14PVBPGPiQ-irU2RUromMg.JPEG.kmscompany/download.jpeg?type=w773" width=400>

---

- ## 변수 ( Variable )

**`변수`** : 값을 담는 공간

변수는 어떤 값을 담을 수 있는 상자라고 생각하면 이해하는데 도움됨.  
<img src="https://cdn.discordapp.com/attachments/1013490661858738209/1022837088510550096/unknown.png" width = 300>

**변수의 종류**  
const : 변수의 값을 변경할 수 없음 (진공포장까지 다 해버린 박스)  
let : 변수의 값을 변경할 수 있음 (아직 테이핑하지 않은 박스)

**변수 선언 방법**

```js
const 변수이름;
const 변수이름 = 값;
let 변수이름;
let 변수이름 = 값;

사용 예시
const naTreeum = 'Handsome';
let age = 10;
```

**변수이름 주의사항**  
: 숫자로 시작할 수 없다  
: 띄어쓰기 할 수 없다.

---

- ## 배열 ( Array )

**`배열`** : 여러개의 값을 담는 공간

배열도 변수와 마찬가지로 값을 담을 수 있는 박스이지만 여러개의 값을 넣을 수 있는 박스라고 생각
배열박스 안에 값을 넣을 땐 네임택을 꼭 붙여서 넣어야하고 네임택은 0부터 시작되는 숫자이다.
네임택은 인덱스라고 부른다.

<img src="https://cdn.discordapp.com/attachments/1013490661858738209/1022851372409966682/unknown.png" width = 300>

**배열 사용 방법**

```js
선언;
let eArr = []; // 빈 배열
const arr = [1, 2, 3]; // 칸이 3개인 배열
```

arr[0] 은 1이다  
arr[1] 은 2이다  
arr[2] 은 3이다

**Q. [1,3,5,10,30,50,100,300,500]이라는 값을 가지고 이름이 numbers인 배열을 선언하고 50을 출력하는 코드를 작성하시오**

```js
const ___ = __________;
console.log(_____);
```

---

- ## 함수 ( Function )
  `함수` : 특정한 기능을 수행하는 코드 조각
  
함수의 기본형
```js
function ( parameter ) {

  return ;
}
```

고기분쇄기를 생각해보자.  
고기분쇄기는 고기를 넣으면 갈린 고기가 나온다.  
소고기를 넣으면 갈린 소고기가 나온다.  
돼지고기를 넣으면 갈린 돼지고기가 나온다.  
닭고기를 넣으면 갈린 닭고기가 나온다.

<br/>

이 구조에서 "고기분쇄기" 는 함수 명이다.  
돼지고기, 소고기, 닭고기 는 입력값이다.  
갈린 돼지고기, 갈린 소고기, 갈린 닭고기 는 반환값이다.

```js
function 고기분쇄기(접시) {
  //고기분쇄기라는 함수를 만든다. 접시에 올려진 고기가 갈린다
  고기를간다(접시); //고기가 갈린다
  return 간고기; //갈린 고기를 반환한다
}

고기분쇄기(소고기); //접시에 소고기를 올려서 고기분쇄기를 작동한다.
고기분쇄기(돼지고기);
고기분쇄기(닭고기);
```

비슷하게 a,b 를 입력받아서 더한 값을 출력하는 함수를 생각해보자

```js
function add(a, b) {
  let result = a + b;
  return result;
}
```

만들어진 함수를 사용하는 방법은 함수이름(입력 값) 으로 사용한다.

```js
const num1 = 10;
const num2 = 20;

function mul(a, b) {
  return a * b;
}

mul(num1, num2);
```

Q. 두 개의 값을 입력받아서 첫 번째로 입력받은 수를 출력하고 두 번째로 입력받은 수를 리턴하는 함수를 작성하시오. 

```js
function func(____) {
  console.log(____);
  return ____;
}
```

Q. 세 개의 값을 입력받아서 첫 번째로 입력받은 수와 두 번째로 입력받은 수를 더한 값과 두 번째로 입력받은 수에서 세 번째로 입력받은 수를 뺀 값의 차이를 반환하는 함수를 작성하시오.
```js
___ func(___){
  let val1 = ___;
  let val2 = ___;
  let result = ___;
  ___ ___;
}
``` 

---

- ## 조건문과 반복문 ( Conditional, Loop )
  `조건문` : 조건이 충족되면 코드를 실행
  
조건문의 기본형
```js
if( 조건 ){
  수행 내용
}
else if( 조건2 ){
  수행 내용
}
else {
  수행 내용
}
```

비교연산자
|연산자| 의미 |
|:-:|:-:|
|==|같다|
|<|왼쪽이 작다|
|>|왼쪽이 크다|
|<=|왼쪽이 오른쪽보다 작거나 같다|
|>=|왼쪽이 오른쪽보다 크거나 같다|
|&&|AND|
|II|OR|
|!|NOT|

Q. 숫자 두 개를 비교해서 큰 값을 반환하는 함수를 작성하시오.
```js
___ bigger(___){
  let bigNum;
  if(______){
    bigNum = ___; 
  }else{
    bigNum = ___;
  }
  return ___;
}
```

  `반복문` : 반복해서 코드를 수행 

반복문의 기본형
```js
for(초기값; 조건; 코드가 실행된 이후){
  수행 내용
}

while(조건){
  수행 내용
}
```

조건이 충족되지 않을 때까지 코드를 실행
```js
let init = 0;
let count = 0;
for(init; init<10; init = init+1){
  count = count + 1;
}
```
초기값 : 0  
조건 : init 이 10보다 작다  
코드 실행 후 : init에 1을 더해준다.  
수행 내용 : count에 1을 더해준다.  


---



```
과제 : quest.js 파일 문제 풀어서 제출하기
- 과제 제출 : github 활용
```

# 2주차 [js기초 / git] 과제리뷰

- 일주일 동안 받은 질문들에 대해 다시한번 짚어줍니다.
- 코드 저장소 / 버전 컨트롤 배워보기

### 3주차 [discord.js]

- ping pong 봇 만들기

### 4주차 [discord.js]

- 명령어 파일 나누기
- 가위바위보 로직 봇에 적용하기
- discord.js Guide 읽는법

#### 5주차 [aws]

- 서버 만들기
- 디스코드 봇 서버에 띄워보기

#### 6주차 [사업기획]

- 사업 아이디어를 기획자 + 개발자 또는 개발자 + 개발자 짝지어서 기획
- 다같이 아이디어 / 현실성 검증해보기

#### 7주차 [모각코 봇 개발]

- 벅사장통해 은행만들기
- 은행 쓰는법
- 개발 진행상황 공유

#### 8주차 [데모데이]

- 봇 다같이 데모데이

#### 9주차 [봇 개시]

- 가상 사회 버그시티에 데뷔
