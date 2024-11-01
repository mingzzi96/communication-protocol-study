var net = require("net");
const host = require("../../constant");

var options = {
  // 접속 정보 설정
  port: 9000,
  host: host,
};

var client = net.connect(options, () => {
  // 서버 접속
  console.log("connected");
});

client.on("data", (data) => {
  // 데이터 수신 이벤트
  console.log(data.toString());
});

client.on("end", () => {
  // 접속 종료
  console.log("disconnected");
});
