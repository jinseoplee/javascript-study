# Window 객체

## alert()

화면에 경고 메시지를 출력한다.

```javascript
alert("이것은 alert 창입니다.");
```

## confirm()

confirm() 함수는 진행할지, 종료할지에 대한 진행 여부를 확인하는 함수다.

```javascript
if (confirm("정말 삭제하시겠습니까?")) {
  console.log("삭제 실행");
} else {
  console.log("취소");
}
```

## prompt()

prompt() 함수는 문자열을 입력받을 수 있는 함수다.

```javascript
let txt = prompt("값을 입력하세요");

if (txt == null) {
  console.log("취소 버튼을 클릭했을 때");
} else if (txt == "") {
  console.log("어떤 값도 입력하지 않고 확인 버튼을 클릭했을 때");
} else if (txt != "") {
  console.log("값을 입력하고 확인 버튼을 클릭했을 때");
}
```

## window.open()

새 창 / 새 탭으로 지정한 url을 오픈한다.

```javascript
window.open("https://github.com/jinseoplee");
```

## setTimeOut(), clearTimeOut()

setTimeout() 함수는 두 번째 파라미터로 지정한 시간 간격 이후에 첫 번째 파라미터에 정의한 함수를 실행하는 함수다. 아직 setTimeout() 함수에서 정의한 함수가 실행되지 않았더라면 clearTimeout() 함수를 사용해서 함수가 실행되는 것을 중지할 수 있다.

```javascript
let myExec;

function myFunction() {
  myExec = setTimeout(function () {
    console.log("5초 후 프로그램 실행");
  }, 5000);
}

function myStopFunction() {
  clearTimeout(myExec);
}
```

## setInterval(), clearInterval()

setInterval() 함수는 두 번째 파라미터로 지정한 시간 간격마다 첫 번째 파라미터에 정의한 함수를 반복적으로 실행하는 함수다. setInterval() 함수는 반복적으로 실행되기 때문에 이를 종료하기 위해서는 clearInterval() 함수를 사용한다.

```javascript
let i = 0;
let fnc = setInterval(function () {
  console.log("3초마다 프로그램 실행 - " + i);
  if (i == 3) {
    clearInterval(fnc);
  }
  i++;
}, 3000);
```
