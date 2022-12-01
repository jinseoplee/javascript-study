# 4.6 Set 객체

Set 객체는 배열처럼 값들의 집합이다. 배열처럼 데이터 타입에 상관없이 값을 추가할 수 있다. 배열과 가장 큰 차이점은 Set은 중복 값을 허용하지 않는다. 즉 Set은 유일한 값을 보장한다.

```javascript
// Set 객체 생성
let mySet = new Set();

// 새로운 데이터 추가
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않는다.

console.log(mySet.size); // 4

// 특정 데이터가 저장되어 있는지 확인
console.log(mySet.has(1)); // true

// 특정 데이터를 삭제
mySet.delete(2);

// Set에 저장되어 있는 모든 데이터를 읽는다.
mySet.forEach(function (item) {
  console.log(item);
});

// 저장되어 있는 모든 데이터를 삭제
mySet.clear();
console.log(mySet.size);
```
