// 파일자체를 import해서 사용
import * as counter from "./counter.js";

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
