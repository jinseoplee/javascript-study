# Symbol

Symbol은 자바스크립트에서 절대 충돌이 일어나지 않는 유일한 key값을 만들어준다.

```javascript
let person = {
  firstName: "JINSEOP",
  lastName: "LEE",
};

let getFullName = Symbol("getFullName"); // 유일한 key 생성
person[getFullName] = function () {
  return this.lastName + " " + this.firstName;
};
```

Symbol을 사용하면 유일한 key를 생성할 수 있을 뿐만 아니라, Symbol로 추가한 key를 노출시키지 않고 감출 수 있다는 이점도 생긴다.

```javascript
for (const key in person) {
  console.log(key); // firstName, lastName 출력
}
console.log(person[getFullName]()); // LEE JINSEOP
```
