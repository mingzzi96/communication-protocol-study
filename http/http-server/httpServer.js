// 참고 :
// https://bs-development.tistory.com/entry/Nodejs%EB%A1%9C-HTTP-TCP-%EC%84%9C%EB%B2%84%EC%99%80-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

const http = require("http");

var server = http.createServer((req, res) => {
  // HTTP 서버 인스턴스를 만든다.
  res.end("hello world");
});

server.listen(8000); // 서버에 포트를 할당
