const fs = require("fs");

console.log(global);

global.hello = () => {
  global.console.log("hello");
};

global.hello(); // global에 정의한 hello를 실행
hello(); // global은 생략 가능
