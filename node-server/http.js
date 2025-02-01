const http = require("http");
const fs = require("fs");
console.log(http.STATUS_CODES);

// 서버 실행후 값 받기
const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);

  const url = req.url;
  // html 파일도 보내기 가능
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    res.write("course");
  } else {
    res.write("not found ");
  }

  res.end();
}); // 서버 생성

server.listen(8080); // 아파치 이런거 없이 서버 생성 완
