// 참고 :
// https://bs-development.tistory.com/entry/Nodejs%EB%A1%9C-HTTP-TCP-%EC%84%9C%EB%B2%84%EC%99%80-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

var http = require("http");
const host = require("../../constant");

var options = {
  // 호출할 페이지 정보 설정
  host: host,
  port: 8000,
  path: "/",
};

var req = http.request(options, (res) => {
  // 페이지를 호출
  var data = "";

  res.on("data", (chunk) => {
    // 서버에서 받아온 데이터 수신
    data += chunk;
  });

  res.on("end", () => {
    // 수신 완료하면 console에 출력
    console.log(data);
  });
});

req.end(); // 명시적 완료를 나타낸다.
