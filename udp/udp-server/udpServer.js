import dgram from "dgram";

const server = dgram.createSocket("udp4");

// let PORT = 8080;
// let HOST = require("../../constant");

server.on("error", (err) => {
  console.log(`server error:${err.stack}`);
  server.close();
});

server.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address} : ${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address} : ${address.port}`);
});

server.bind(8080);
