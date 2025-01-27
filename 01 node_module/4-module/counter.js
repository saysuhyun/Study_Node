let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// 노드의 module에다가 현재 파일의 함수를 연결해줌 이걸 다른 파일에서 사용이 가능해짐 module.exports가 this니까
module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports);
// exports = {};
// console.log(module.exports === exports);
exports.increase = increase;
console.log(module);
