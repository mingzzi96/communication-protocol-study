var net = require("net"); // net 모듈 로드

var server = net.createServer((socket) => {
  // TCP 서버를 만든다.
  socket.end("hello world");
});

server.on("error", (err) => {
  // 네트워크 에러 처리
  console.log(err);
});

server.listen(9000, () => {
  console.log("listen", server.address());
});
