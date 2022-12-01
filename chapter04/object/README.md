# Object 객체

Object 객체는 모든 자바스크립트 객체의 루트 객체이다.

```javascript
// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "JINSEOP";
person.lastName = "LEE";
person.age = 28;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.getFullName());
```
