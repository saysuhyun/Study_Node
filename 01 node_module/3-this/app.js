function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("----- class -----");
    console.log(this); // 글로벌이 아니라 클래스 자기자신 A
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

console.log("--- global scope ---");
console.log(this); // {}
console.log(this === module.exports); // this = 모듈에 있는 export임!
