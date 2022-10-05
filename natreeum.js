"use strict";
let question7 = 612423;
let _ = 1547534593245;
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const num3 = Math.floor(Math.random() * 10);
const num4 = Math.floor(Math.random() * 10);

/*==============================================================================================================================*/

//자료형에 대한이해
// 문제 1번 : 자료형은 숫자이고 값은 500을 갖는 변수 값을 할당하세요.
let question1 = 500;

// 문제 2번 : 자료형은 문자열이고 값은 500을 갖는 변수 값을 할당하세요.
let question2 = "500";

// 문제 3번 : 참 의 의미를 갖는 값을 할당하세요.
let question3 = true;

//변수에 대한 이해

// 문제 4번 : 값을 바꿀 수 없고 값이 100인 변수 "question4"을 선언하세요.

/* 여기에 코드를 작성하세요 */
const question4 = 100;

const rate = 50;

// 문제 5번 : 값을 바꿀 수 있고 값이 100인 변수 "question5"을 선언하세요.

/* 여기에 코드를 작성하세요 */
let question5 = 100;

// 문제 6번 : num1 과 num2는 랜덤한 숫자입니다. 두 변수를 더한 값을 갖는 변수 "question6"를 선언하세요.

/* 여기에 코드를 작성하세요 */
// const question6 = num1 + num2;
let question6 = num1 + num2;

// 문제 7번 : question7변수의 값에 661023을 더하는 값을 할당하세요.
question7 += 661023;

//배열에 대한 이해

// 문제 8번 : 빈 배열 question8 을 선언하세요.

/* 여기에 코드를 작성하세요 */
const question8 = [];

// 문제 9번 : QArr배열이 선언되어있습니다. QArr에서 1번 인덱스를 갖고있는 값을 출력하기 위해 빈칸을 채우세요.
const QArr = [num1, num2];
const question9 = QArr[1];
// console.log(question9);

// 문제 10번 : QArr2배열이 선언되어있습니다. QArr2에서 0번 인덱스와 3번 인덱스의 값을 더하여 question10에 저장하세요.
const QArr2 = [num1, num2, num3, num4];
const question10 = QArr2[0] + QArr2[3];

//함수에 대한 이해

// 문제 11번 : 두개의 인자를 받고, 두 인자의 곱한값에서 더한 값을 빼는 함수를 작성하세요.
// 아래 코드 주석을 해제한 후 문제를 푸세요

function question11(num1, num2) {
  return num1 * num2 - (num1 + num2);
}

//조건문과 반목문에 대한 이해

// 문제 12번 : flag가 false일 때 question12변수에 5를 3번 더하는 조건문과 반복문을 작성하세요.
// 아래 코드 주석을 해제한 후 문제를 푸세요

const flag = false;
let question12 = 0;
let cnt = 0;
if (flag == false) {
}

/*==============================================================================================================================*/
/*아래는 테스트를 위한 코드로 건드리지 마세요. */

if (question1) {
  if (question1 === 500) console.log(`1번 정답입니다.⭕`);
  else console.log(`1번 오답입니다.❌`);
} else console.log(`1번 오답입니다.❌`);

if (question2) {
  if (question2 === "500") console.log(`2번 정답입니다.⭕`);
  else console.log(`2번 오답입니다.❌`);
} else console.log(`2번 오답입니다.❌`);

if (question3 === true) console.log(`3번 정답입니다.⭕️`);
else console.log(`3번 오답입니다.❌`);

try {
  if (question4) {
    let check4 = false;
    try {
      question4 = 10;
    } catch (e) {
      check4 = true;
    }
    if (question4 === 100 && check4 === true) console.log(`4번 정답입니다.⭕️`);
    else console.log(`4번 오답입니다.❌`);
  }
} catch (e) {
  console.log(`4번 오답입니다.❌`);
}

try {
  if (question5) {
    if (question5 === 100) {
      try {
        question5 = 10;
        if (question5 === 10) console.log(`5번 정답입니다.⭕️`);
        else console.log(`5번 오답입니다.❌`);
      } catch (e) {
        console.log(`5번 오답입니다.❌`);
      }
    } else console.log(`5번 오답입니다.❌`);
  } else console.log(`5번 오답입니다.❌`);
} catch (e) {
  console.log(`5번 오답입니다.❌`);
}

try {
  if (question6) {
    if (question6 === num1 + num2) console.log(`6번 정답입니다.⭕️`);
    else console.log(`6번 오답입니다.❌`);
  } else console.log(`6번 오답입니다.❌`);
} catch (e) {
  console.log(`6번 오답입니다.❌`);
}

if (question7 === 612423 + 661023) {
  console.log(`7번 정답입니다.⭕️`);
} else console.log(`7번 오답입니다.❌`);

try {
  if (question8) {
    if (question8.length === 0) console.log(`8번 정답입니다.⭕️`);
    else console.log(`8번 오답입니다.❌`);
  } else console.log(`8번 오답입니다.❌`);
} catch (e) {
  console.log(`8번 오답입니다.❌`);
}

if (question9 === num2) {
  console.log(`9번 정답입니다.⭕️`);
} else console.log(`9번 오답입니다.❌`);

if (question10 === num1 + num4) console.log(`10번 정답입니다.⭕️`);
else console.log(`10번 오답입니다.❌`);

try {
  if (question11(num1, num2) === num1 * num2 - (num1 + num2))
    console.log(`11번 정답입니다.⭕️`);
  else console.log(`11번 오답입니다.❌`);
} catch (e) {
  console.log(`11번 오답입니다.❌`);
}

try {
  if (question12 === 15 && cnt === 3) console.log(`12번 정답입니다.⭕️`);
  else console.log(`12번 오답입니다.❌`);
} catch (e) {
  console.log(`12번 오답입니다.❌`);
}
