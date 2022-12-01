# Number 객체

숫자를 다룰 때 유용한 프로퍼티와 함수를 제공하는 레퍼 객체이다.

## toString()

숫자형 데이터를 문자형 데이터로 반환하는 함수다.

```javascript
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

console.log(year + "-" + month.toString().padStart(2, 0) + "-" + day.toString().padStart(2, 0));
```

## toExponential()

숫자를 지수형으로 반환해 주는 함수다.

```javascript
let x = 10.656;
console.log(x.toExponential(2)); // 1.07e+1
console.log(x.toExponential(4)); // 1.0656e+1
console.log(x.toExponential(6)); // 1.065600e+1
```

## toFixed()

지정된 소수점 자릿수에 대한 반올림 값을 반환하는 함수다.

```javascript
let x = 10.656;
console.log(x.toFixed(0)); // 11
console.log(x.toFixed(1)); // 10.7
console.log(x.toFixed(3)); // 10.656
```

## toPrecision()

정수와 소수를 포함해서 몇 번째 자리까지 보여줄지 결정하는 함수다.

```javascript
let x = 10.656;
console.log(x.toPrecision()); // 10.656
console.log(x.toPrecision(2)); // 11
console.log(x.toPrecision(4)); // 10.66
```

## parseInt()

정수로 반환하는 함수이다. 문자열의 시작이 숫자형이면 숫자형 데이터를 반환한다.

```javascript
console.log(parseInt("10")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("years 10")); // NaN
```

## parseFloat()

부동소수점으로 반환하는 함수다.

```javascript
console.log(parseFloat("10.12")); // 10.12
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("years 10")); // NaN
```

## Number 객체의 프로퍼티

| property                 | 설명                                       |
| ------------------------ | ------------------------------------------ |
| Number.MAX_VALUE         | 자바스크립트에서 다룰 수 있는 가장 큰 수   |
| Number.MIN_VALUE         | 자바스크립트에서 다룰 수 있는 가장 작은 수 |
| Number.POSITIVE_INFINITY | infinity                                   |
| Number.NEGATIVE_INFINITY | -infinity                                  |
| Number.NaN               | Not-a-Number                               |
