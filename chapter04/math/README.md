# Math 객체

```javascript
// Math.round()는 숫자에 대한 반올림 처리를 한다.
Math.round(4.9); // returns 5
Math.round(4.7); // returns 5
Math.round(4.4); // returns 4
Math.round(4.2); // returns 4
Math.round(-4.2); // returns -4

// Math.ceil()은 숫자에 대한 무조건 올림 처리를 한다.
Math.ceil(4.9); // returns 5
Math.ceil(4.7); // returns 5
Math.ceil(4.4); // returns 5
Math.ceil(4.2); // returns 5
Math.ceil(-4.2); // returns -4

// Math.floor()는 숫자에 대한 무조건 내림 처리를 한다.
Math.floor(4.9); // returns 4
Math.floor(4.7); // returns 4
Math.floor(4.4); // returns 4
Math.floor(4.2); // returns 4
Math.floor(-4.2); // returns -5

// Math.trunc()는 소수 부분은 버리고 정수 부분만 반환한다.
Math.trunc(4.9); // returns 4
Math.trunc(4.7); // returns 4
Math.trunc(4.4); // returns 4
Math.trunc(4.2); // returns 4
Math.trunc(-4.2); // returns -4

// Math.sign()은 숫자가 양수인지 음수인지 확인하는 용도로 사용한다.
Math.sign(-4); // returns -1
Math.sign(0); // returns 0
Math.sign(4); // returns 1

// Math.pow()는 제곱근 값을 반환한다.
Math.pow(8, 2); // returns 64

// Math.sqrt()는 루트 값을 반환한다.
Math.sqrt(64); // returns 8

// Math.abs()는 절댓값을 반환한다.
Math.abs(-4.7); // returns 4.7

// Math.min()은 가장 작은 값을 반환하고 Math.max()는 가장 큰 값을 반환한다.
Math.min(0, 150, 30, 20, -8, -200); // returns -200
Math.max(0, 150, 30, 20, -8, -200); // returns 150

// Math.random()은 0보다 크고 1보다 작은 부동소수점을 반환한다.
Math.random(); // returns a random number

Math.floor(Math.random() * 10); // 0에서 9사이의 정수

Math.floor(Math.random() * 101); // 0에서 100사이의 정수

Math.floor(Math.random() * 10) + 1; // 1에서 10사이의 정수

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```
