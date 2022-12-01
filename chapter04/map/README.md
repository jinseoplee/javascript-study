# 4.7 Map 객체

Map 객체는 Object와 매우 유사하다. Map 객체는 키(Key)와 값(Value)을 매핑시켜서 값을 저장하며 저장된 순서대로 각 요소에 접근할 수 있다.

```javascript
// Map 객체 생성
let userMap = new Map();

// 데이터 저장
userMap.set("name", "홍길동");
userMap.set("email", "hong@gmail.com");
userMap.set("phone", "000-0000-0000");

console.log(userMap.size);

// 저장된 데이터를 읽을 때 get() 사용
console.log(userMap.get("name")); // 홍길동

// 특정 키의 값이 저장되어 있는지 확인
console.log(userMap.has("name")); // true

// Map에 저장되어 있는 모든 데이터를 읽는다.
userMap.forEach(function (item) {
  console.log(item);
});

// 저장되어 있는 모든 데이터를 한 번에 삭제
userMap.clear();
console.log(userMap.size);
```

## Object와 Map의 차이점

- Object의 경우 키로 문자열만 사용할 수 있지만, Map은 키로 어떤 타입이든 가능하다.
- Object는 몇 개의 데이터가 담겼는지 수동적으로 계산해야 하지만, Map은 size 속성을 통해 크기를 쉽게 알 수 있다.
- Object는 저장된 데이터를 for-in 반복문으로 읽었을 때 데이터를 저장한 순서대로 읽는다고 보장할 수 없다. 하지만 Map은 데이터를 저장한 순서를 보장한다.
