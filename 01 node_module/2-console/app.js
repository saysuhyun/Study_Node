console.log("logging....");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "ellie", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student);
// log랑 비슷함 옵션 추가가가능 depth가 0이니까 Object이래 뜸
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();

// trace 디버깅할 때 유용
// 어디서 이 함수가 불러졌는지 파악 가능 ! 이건 현업에서도 사용가능 할듯
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
