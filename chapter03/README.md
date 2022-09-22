# 3. 자바스크립트 기본 문법

## 3.1 자바스크립트 작성 위치

HTML에서 자바스크립트를 작성할 수 있는 위치는 2가지다.

HTML head 태그

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <script>
        // head 태그에 script 태그를 만들어서 작성할 수 있다.
    </script>
</head>
<body>
</body>
</html>
```

HTML body 태그

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <script>
        // body 태그 제일 하단에 script 태그를 만들어서 작성할 수 있다.
    </script>
</body>
</html>
```

이외에도 별도로 자바스크립트 파일을 생성하고 HTML 파일에 삽입해서 사용할 수 있다.

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <script src="js_location.js"></script>
</head>
<body>
    <script src="js_location.js"></script>
</body>
</html>
```

## 3.2 변수와 상수

변수란 데이터를 저장할 수 있는 메모리 공간이다. 변수를 선언하게 되면 변수명이 값이 저장되어 있는 메모리 위치를 기억하고 참조 중인 상태가 된다. 상수는 변하지 않는 값을 가지고 있는 변수를 말한다.

자바스크립트에서는 변수는 var, let 키워드를 상수는 const 키워드를 사용한다.

### 3.2.1 var 선언자

```javascript
var x = 5;
var y = 6;
var z = x + y;

var x = 7; // 동일한 변수명을 사용할 수 있다.
z = x + y;
```

var 선언자를 사용하면 동일한 변수명을 사용해도 에러가 나지 않기 때문에 매번 새로운 변수명을 만들어서 사용하지 않아도 된다는 장점이 있다. 하지만 동일한 변수명으로 변수가 새로 선언되면 기존 코드에서 동일한 이름으로 사용되던 변수에 할당된 값이 사라지므로 예기치 못한 에러가 발생할 수 있다.

### 3.2.2 let 선언자

let 선언자는 ES6에 추가된 선언자다. 변수를 선언하고 값을 할당하는 방식은 var와 동일하다. let 선언자는 var 선언자의 변수명이 동일함으로써 생기는 오류를 막을 수 있기 때문에 var를 사용하기보단 let을 사용하는 것이 좋다.

```javascript
let x = 5;
let y = 6;
let z = x + y;

x = 7;
let x = 7; // 에러 발생. 동일한 변수명을 사용할 수 없다.
```

### 3.2.3 const 연산자

const 선언자는 ES6에 추가된 선언자다. const 선언자를 사용할 경우 선언 시점에 값을 할당한 후 같은 변수명으로 재선언뿐만 아니라 이미 선언된 변수의 값도 변경할 수 없다.

```javascript
const x = 5;
const y = 6;
z = x + y;

x = 7; // 에러 발생
const x = 7; // 에러 발생
```

## 3.3 데이터 타입

### 3.3.1 기본 자료형

자바스크립트는 6가지 기본 자료형 데이터 타입이 있다.

- String(문자열)
- Number(숫자)
- Boolean(참/거짓)
- Undefined
- Null
- Symbol

### 3.3.2 객체

기본적으로 자바스크립트의 모든 것은 객체(Object)이고 키(Key)-값(Value) 쌍으로 데이터를 저장한다.

```javascript
const person = {
  firstName: "jinseop",
  lastName: "lee",
  age: 28,
};
```

객체는 키를 이용해서 데이터를 변경하거나 가져올 수 있다.

```javascript
person["firstName"] = 29;
person.age = 29;

console.log(person["firstName"]);
console.log(person.age);
```

### 3.3.3 배열

배열은 여러 값을 하나의 단일 참조로 저장할 수 있도록 해주는 자료구조이다. 배열에 저장된 데이터는 순서를 갖고 특정 위치의 데이터에 접근하기 위해 인덱스 번호를 사용한다.

```javascript
const cars = ["benz", "bmw", "audi"];

console.log(cars[0]); // benz

car[0] = "porsche"; // 배열의 첫 번째 요소의 값이 porsche로 변경

console.log(cars[0]); // porsche
```

## 3.4 연산자

자바스크립트에서는 비교, 산술, 논리, 문자열 연산자 등이 있다.

### 3.4.1 비교 연산자

자바스크립트에서 값이 같은지 비교할 때는 동등(==) 연산자, 다른지를 비교할 때는 부등(!=) 연산자를 사용한다.

```javascript
let x = 3; // 숫자형
let y = "3"; // 문자형
console.log(x == y); // x와 y의 데이터 타입은 다르지만 문자형 3이 숫자 타입으로 자동 변환이 되어 true를 반환한다.
```

자바스크립트에서 데이터 타입까지 비교하려면 일치(===) 연산자와 불일치(!==) 연산자를 사용한다.

```javascript
let x = 3;
let y = "3";
console.log(x === y); // 값뿐만 아니라 데이터 타입까지 비교하기 때문에 false
console.log(x !== y); // true
```

그 외에 크고 작음을 비교하기 위한 연산자들이 존재한다.

### 3.4.2 산술 연산자

산술 연산자는 피연산자가 숫자 값이며 기본적인 덧셈(+), 뺄셈(-), 곱셈(\*), 나눗셈(/) 연산으로 숫자 값을 반환한다. 표준 산술 연산자 외에도 나머지 연산자(%), 증감 연산자(++, --), 단항 부정 연산자(-), 숫자화 연산자(+) 등이 있다.

### 3.4.3 논리 연산자

논리 연산자는 Boolean 값에 대한 논리 AND 비교(&&) 혹은 논리 OR 비교(||)를 통해 Boolean을 반환한다.

### 3.4.4 문자열 연산자

문자열 값을 연결 연산자(+)를 이용해서 두 문자열을 합친 새로운 문자열을 반환한다.

## 3.5 조건문

자바스크립트에서 조건문은 if-else를 사용하는 방법과 switch 문을 사용하는 방법이 있다.

다음은 조건식을 거짓으로 취급하는 값들이다.

- false
- undefined
- null
- 0
- NaN
- ""(비어 있는 문자열)

## 3.6 반복문

자바스크립트에서는 for-loop, for-in, for-of, while 같은 반복문을 제공한다.

### 3.6.1 for-loop

for-loop 문은 조건을 만족하는 동안 코드 블록을 반복적으로 수행한다.

```javascript
let brands = ["Samsung", "Apple", "Naver"];
console.log(brands[0]); // Samsung
console.log(brands[1]); // Apple
console.log(brands[2]); // Naver
```

### 3.6.2 for-in

for-in 문은 배열뿐만 아니라 객체 내에 정의된 키값의 수만큼 코드 블록을 실행할 수 있다.

```javascript
let person = { firstName: "jinseop", lastName: "lee", age: 28 };

for (const key in person) {
  console.log(person[key]); // 오브젝트 key에 해당하는 데이터(값)를 출력한다.
}
```

for-in 문은 배열에 사용하면 배열에 등록된 데이터 수만큼 반복문을 실행한다.

```javascript
let brands = ["Samsung", "Apple", "Naver"];
for (const brand in brands) {
  console.log(brand); // 배열의 인덱스 번호를 출력한다.
}
```

### 3.6.3 for-of

Array, Map, String 등 iterable 객체에서 사용 가능한 반복문이다.

```javascript
let brands = ["Samsung", "Apple", "Google"];
for (const brand of brands) {
  console.log(brand); // 배열의 각 요소를 출력한다.
}
```

```javascript
let language = "JavaScript";
for (const c of language) {
  console.log(c); // 문자열의 단일 문자를 출력한다.
}
```

## 3.7 함수

함수는 특정 기능을 수행하는 일련의 코드 블록을 하나의 실행 단위로 만든 것이다.

### 3.7.1 함수 정의 및 사용 방법

함수를 정의하고 함수명을 사용해서 호출한다.

```javascript
/**
 * 덧셈 함수
 * @param {number} n1
 * @param {number} n2
 * @returns n1 + n2
 */
function add(n1, n2) {
  return n1 + n2;
}

let sum = add(2, 5); // 함수 호출
```

변수에 함수를 할당해서 변수명을 사용해서 호출한다. 이를 함수 표현식이라 부른다.

```javascript
let sum = function (n1, n2) {
  return n1 + n2;
};
console.log = sum(2, 5); // 함수 호출
```

자바스크립트의 내장 함수인 Function 함수에 파라미터와 코드 블록을 문자열로 순서대로 작성하고 생성해서 변수명을 사용해서 호출한다.

```javascript
let sum = new Function("n1", "n2", "return n1 + n2");
let result = sum(2, 5); // 함수 호출
```

### 3.7.2 함수를 사용하는 이유

- 코드의 재활용
- 유지보수 편의성
- 코드 가독성 향상
