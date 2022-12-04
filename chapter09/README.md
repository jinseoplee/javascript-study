# 자바스크립트의 메모리 관리

메모리 누수(Memory leak)란 프로그램이 작동하면서 할당된 메모리가 더 이상 사용되지 않는 시점에서도 반환되지 않는 현상이다. 정상적으로 반환되지 않은 메모리가 계속 누적되면 프로그램에 할당할 수 있는 메모리가 부족해지면서 프로그램이 비정상적으로 작동하거나 성능이 서서히 낮아진다. 자바스크립트는 가비지 컬렉터가 프로그램에 할당된 메모리를 주기적으로 관리해 더 이상 사용되지 않는 메모리는 반환한다.

## 메모리 할당

### 메모리 할당 시점

자바스크립트는 값을 선언할 때 자동으로 메모리를 할당한다.

```javascript
let num = 1; // 숫자형 데이터를 담기 위한 메모리 할당

let message = "Hello JS"; // 문자열을 담기 위한 메모리 할당
let language = message.substring(6, 8); //새로운 문자열

// 오브젝트와 그 오브젝트에 포함된 값들을 담기 위한 메모리 할당
let obj = {
  n1: 1,
  n2: 2,
};

let arr = [1, 2, 3]; // 배열과 배열에 담긴 값들을 담기 위한 메모리 할당
let arr2 = [4, 5, 6];
let arr3 = arr.concat(arr2); // 6개의 원소를 가진 새로운 배열

// 함수를 위한 메모리 할당(함수는 호출이 가능한 오브젝트)
function sum(n1, n2) {
  return n1 + n2;
}

let d = new Date(); // Date 객체를 위한 메모리 할당
```

### 스택(Stack) 메모리

스택(Stack) 메모리는 정적 메모리 할당 시 사용된다. 자바스크립트에서 배열, 오브젝트, Map, Set 같은 객체는 저장되는 데이터가 가변적으로 변할 수 있다. 하지만 문자열, 숫자형, Boolean, undefined, null 같은 데이터는 데이터의 크기가 유한하고 정적이기 때문에 스택 메모리에 저장된다.

### 힙(Heap) 메모리

힙(Heap) 메모리는 동적 메모리 할당에 사용되며 실제 데이터가 저장되는 위치에 대한 참조(포인터)를 저장한다. 스택에 비해 데이터를 처리하고 접근하는 속도는 느리지만 더 큰 용량의 데이터를 저장할 수 있다. 자바스크립트에서 배열, 오브젝트, Map, Set과 같은 객체는 저장되는 데이터가 동적으로 변동 가능하기 때문에 사용하는 시점에 얼마큼의 데이터 저장 공간이 필요한지 알 수 없다. 그래서 실제로 데이터가 저장되는 메모리 공간과 이 위치를 알 수 있는 참조 값을 저장하는 메모리 공간을 사용하게 된다. 따라서 배열, 오브젝트 변수가 할당되면 그 변수는 실제 데이터가 저장되어 있는 메모리 블록의 주소에 대한 참조 값을 저장하게 된다.

힙(Heap) 메모리를 사용하는 경우에는 메모리를 더 이상 사용하지 않게 되면 개발자가 직접 해제해야 메모리를 효율적으로 관리할 수 있기 때문에 사용을 마친 변수에 null을 할당하면 메모리를 해제할 수 있다.

## 메모리 해제

저수준 언어에서는 메모리가 필요 없어질 때를 개발자가 직접 결정하고 할당된 메모리를 직접 해제한다. 하지만 자바스크립트 같은 고수준 언어는 가비지 컬렉션(Garbage Collection)이 메모리를 관리해 준다. 가비지 컬렉션은 메모리 할당을 추적하고 할당된 메모리 블록이 더 이상 필요하지 않게 됐는지를 판단하여 메모리를 회수한다. 가비지 컬렉션은 메모리를 더 이상 사용하지 않는지를 스스로 판단하기 때문에 가비지 컬렉션 알고리즘마다 작동하는 방식에 차이가 있다.

### 레퍼런스 카운팅(Reference Counting)

레퍼런스 카운팅은 이름처럼 레퍼런스, 즉 객체를 참조하는 변수의 수를 관리한다. 객체를 참조하는 변수의 수가 증가할 때마다 카운트가 1만큼 증가하고 객체를 참조하는 변수의 수가 줄어들면 카운트가 1만큼 줄어든다. 0이 되는 순간 객체는 더 이상 참조되고 있지 않다고 판단하여 메모리가 반환된다.

### 마크 앤 스윕(Mark & Sweep)

마크 앤 스윕은 root라는 오브젝트 집합을 가지고 있다. 자바스크립트에서는 window 같은 전역 객체와 전역 변수들이 root에 해당한다. 가비지 컬렉터는 주기적으로 root로부터 시작하여 root가 참조하는 오브젝트들을 표시(Mark)한다. root에서 접근이 가능하면 가비지가 아니라고 판단하고 표시(Mark)되지 않은 오브젝트들은 대상이 되어 메모리가 반환된다.