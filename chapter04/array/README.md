# Array 객체

## toString()

배열 안의 모든 문자를 쉼표를 이용해 모두 결합하고 하나의 문자열로 반환한다.

```javascript
let fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.toString()); // Banana,Orange,Apple
```

## join()

배열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합하고 하나의 문자열로 반환한다.

```javascript
let userHtml = [];
for (const user of userList) {
  userHtml.push("<tr>");
  userHtml.push("<td>" + user.name + "</td>");
  userHtml.push("<td>" + user.email + "</td>");
  userHtml.push("</tr>");
}

document.getElementById("userTableTbody").innerHTML = userHtml.join("");
```

## pop()

배열에서 마지막 데이터를 제거하고 반환하는 함수이다. pop() 함수를 사용하면 후입선출을 쉽게 구현할 수 있다.

```javascript
let fruits = ["Banana", "Orange", "Apple"];
let x = fruits.pop();
console.log(x); // Apple
```

##push()

배열에 새로운 요소를 추가하는 함수이다.

```javascript
let fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
console.log(fruits); // "Kiwi"가 fruits 배열에 추가된다.
```

## shift()

배열에서 첫 번째 요소를 제거하고 반환하는 함수이다. shift() 함수를 사용하면 선입선출을 쉽게 구현할 수 있다.

```javascript
let fruits = ["Banana", "Orange", "Apple"];
fruits.shift();
console.log(fruits); // "Banana"를 fruits 배열에서 제거하고 반환한다.
```

## unshift()

배열의 맨 앞에 요소를 추가하고 배열의 길이를 반환하는 함수이다.

```javascript
let cities = [
  { code: "02", title: "서울" },
  { code: "031", title: "경기" },
  { code: "043", title: "대전" },
];

cities.unshift({ code: "", title: "지역을 선택하세요" }); // 배열의 첫 번째 요소로 추가

let options = [];
for (const city of cities) {
  options.push('<option value="' + city.code + '">' + city.title + "</option>");
}
```

## 배열 요소 변경

배열의 요소를 변경할 때는 변경하고자 하는 배열 인덱스로 접근해서 새로운 요소를 할당하면 된다.

```javascript
let fruits = ["Banana", "Orange", "Apple"];
fruits[0] = "Kiwi"; // 배열에서 인덱스가 0인 요소인 "Banana"를 "Kiwi"로 변경한다.
```

## splice()

새로운 요소를 특정 위치에 추가하는 함수이다. 추가 시에는 기존 요소를 삭제할 수도 있다.

- 첫 번째 파라미터: 새로운 요소를 추가할 인덱스 번호
- 두 번째 파라미터: 첫 번째 파라미터에 해당하는 인덱스에서 요소를 추가하기 전에 삭제할 요수 수
- 나머지 파라미터: 추가할 요소

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
```

## concat()

2개 이상의 배열을 하나의 배열로 결합하는 함수이다.

```javascript
let arr1 = ["Banana", "Apple"];
let arr2 = ["Orange", "Kiwi"];
let arr3 = arr1.concat(arr2);
console.log(arr3); // ['Banana', 'Apple', 'Orange', 'Kiwi']
```

## slice()

시작 인덱스에서 종료 인덱스에 해당하는 요소까지 잘라내서 배열 형태로 반환하는 함수이다.

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let arr = fruits.slice(3); // ['Apple', 'Mango']
let arr2 = fruits.slice(1, 3); // ['Orange', 'Lemon']
```

## sort()

배열에 문자형 데이터를 오름차순으로 정렬하는 함수이다. 배열 안에 숫자형 데이터가 있더라도 기본적으로 문자로 인식해서 오름차순으로 정렬을 하게 된다. 그래서 숫자 값으로 정렬하려면 정렬 함수를 정의해서 사용해야 한다.

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());

console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);
```

정렬된 배열을 역순으로 정렬하려면 reverse() 함수를 사용하면 된다.

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

Object의 특정 키를 기준으로 sort()를 사용하는 경우가 많다.

```javascript
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "대전",
  },
  {
    name: "양세찬",
    point: 76,
    city: "경기",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

persons.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});
```

## filter()

특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환하는 함수이다.

```javascript
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let result = words.filter(function (word) {
  return word.length > 6; // 단어의 길이가 6자리보다 큰 단어만 추출해서 새로운 배열을 반환한다.
});

console.log(result); // ['exuberant', 'destruction', 'present']
```

다음은 점수가 80 보다 큰 사람만 가져오기 위해 filter() 함수를 사용한 예제이다.

```javascript
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "대전",
  },
  {
    name: "양세찬",
    point: 76,
    city: "경기",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

let pass = persons.filter(function (person) {
  return person.point > 80;
});
```

## map()

배열의 데이터가 Object형일 때, 배열에 담긴 Object를 새로운 형태의 Object로 변환해서 배열로 반환하는 함수이다.

map()을 사용하는 용도

- 데이터베이스로부터 가져온 데이터에는 존재하지 않지만 화면 여러 곳에서 자주 사용하게 되는 데이터를 다룰 경우
- 서버에서 클라이언트로 데이터를 전송하기 전에 map() 함수를 통해 클라이언트에서 사용할 데이터만 새로 정의할 경우

```javascript
let userList = [
  {
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com",
  },
  {
    firstName: "종국",
    lastName: "김",
    email: "kim@gmail.com",
  },
  {
    firstName: "세찬",
    lastName: "양",
    email: "yang@gmail.com",
  },
  {
    firstName: "석진",
    lastName: "지",
    email: "ji@gmail.com",
  },
];

let userList2 = userList.map(function (user) {
  return {
    fullName: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});
```

## reduce()

배열에 담긴 데이터를 하니씩 순회하며 callback 함수의 실행 값을 누적하여 결과값을 반환하는 함수이다.

callback 함수는 다음과 같이 4개의 매개변수를 가질 수 있다.

- 첫 번째 매개변수: accumulator(누적값)
- 두 번째 매개변수: currentValue(현재 배열의 요소)
- 세 번째 매개변수: currentIndex(인덱스 번호)
- 네 번째 매개변수: arr(배열)

```javascript
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function (total, currentValue) {
  return total + currentValue;
});
console.log(sum);
```
