# String 객체

자바스크립트에서 문자열을 다루기 위한 객체로 문자열을 다룰 때 유용한 프로퍼티와 함수를 제공한다.

## length

문자열 길이를 반환하는 프로퍼티

```javascript
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length; // 26
```

## indexOf()

찾고자 하는 문자열이 시작되는 index를 반환하는 함수이다. 문자열을 발견하지 못하면 -1을 반환한다.

```javascript
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate"); // 7
```

## lastIndexOf()

찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환한다. 문자열을 발견하지 못하면 -1를 반환한다.

```javascript
let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate"); // 21
```

## slice()

파라미터로 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환한다.

```javascript
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); // Banana
let res2 = str.slice(7); // Banana, Kiwi
```

## substring()

slice() 함수와 동일한 기능을 한다. 단, 파라미터로 음수를 허용하지 않는다.

```javascript
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13); // Banana
```

## substr()

slice() 함수와 매우 유사하다. 단, 두 번째 파라미터는 종료 인덱스가 아니라 첫 번째 파라미터인 시작 위치에서 잘라낼 문자의 길이이다.

```javascript
let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 6); // Banana
```

## replace()

문자열 내의 특정 문자열을 지정한 문자열로 치환한다.

```javascript
let str = "Please visit Seoul and Seoul";
let n = str.replace("Seoul", "Jeju"); // Please visit Jeju and Seoul
```

## toUpperCase(), toLowerCase()

toUpperCase()는 문자열을 모두 대문자로 변경한다.

```javascript
let text1 = "Hello World";
let text2 = text1.toUpperCase(); // HELLO WORLD
```

toUpperCase()는 문자열을 모두 소문자로 변경한다.

```javascript
let text1 = "Hello World";
let text2 = text1.toLowerCase(); // hello world
```

## concat()

2개 이상의 문자열을 하나의 문자열로 합친다.

```javascript
let text1 = "Hello";
let text2 = " World";
let text3 = text1.concat(text2);
```

## trim()

문자열의 앞, 뒤 공백을 모두 제거한다.

```javascript
let str = "     Hello World     ";
console.log(str.trim());
```

## padStart(), padEnd()

padStart()는 문자열 앞에 지정된 문자를 지정된 길이만큼 추가한다.

```javascript
let str = "5";
console.log(str.padStart(4, 0)); // 0005
```

padEnd()는 문자열 뒤에 지정된 문자를 지정된 길이만큼 추가한다.

```javascript
let str = "5";
console.log(str.padEnd(4, 0)); // 5000
```

## charAt()

문자열에서 특정 인덱스에 해당하는 문자 하나를 반환한다.

```javascript
let str = "Hello World";
console.log(str.charAt(0)); // H
```

## charCodeAt()

문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드 값을 반환한다.

```javascript
let str = "Hello World";
console.log(str.charCodeAt(0)); // 72
```

## split()

문자열 내의 특정 구분자를 기준으로 문자열을 분리해서 배열로 반환한다.

```javascript
let birthday = "1995-04-15";
let arr = birthday.split("-");
console.log(arr); // ['1995', '04', '15']
```

## startsWith(), endsWith()

startsWith()는 문자열의 시작이 파라미터로 전달된 문자열로 시작되는지 확인하는 함수다.

```javascript
let url = "http://website.com";
if (url.startsWith("http://") || url.startsWith("https://")) {
  console.log("올바른 형식의 웹사이트 url");
} else {
  console.log("잘못된 형식의 웹사이트 url");
}
```

endsWith()는 문자열의 끝이 파라미터로 전달된 문자열로 종료되는지 확인하는 함수다.

```javascript
let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log("pdf 파일");
} else {
  console.log("다른 형식의 파일");
}
```
