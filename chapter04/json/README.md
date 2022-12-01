# JSON 객체

JSON(Javascript Object Notation)은 데이터를 저장하거나 전송할 때 많이 사용되는 경량의 DATA 교환 형식이다.

- 서버와 클라이언트 간의 데이터 전송 시 많이 사용된다.
- 자바스크립트의 Object 객체 표기법과 매우 유사하다.
- JSON 데이터는 자바스크립트 JSON 객체의 parse() 함수를 이용하면 자바스크립트 Object 객체로 변환해서 사용할 수 있다.
- 프로그래밍 언어에 상관없이 사용할 수 있는 데이터 교환 형식이다.
- Object 객체와 마찬가지로 키(Key)-값(Value)을 가지며 키(Key)는 반드시 쌍따옴표("")를 이용해서 표기해야 한다.

```javascript
let data = {
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ],
};

let stringValue = JSON.stringify(data); // 객체를 문자열로 변환

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text); //문자열 형태의 JSON을 Object 객체로 변환
```

JSON 객체에는 2개의 중요한 내장 함수가 있다.

- JSON.stringify: 데이터를 서버로 전송하기 위해서는 데이터 형태를 문자열 형태로 변환해야 한다. JSON.stringify는 Object 데이터를 문자열로 변환해 준다.

- JSON.parse: 서버로부터 응답받은 데이터는 문자열 형태이다. JSON.parse 함수를 사용하면 자바스크립트 Object 객체로 변환해 준다.
