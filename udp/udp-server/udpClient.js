import dgram from "dgram";
import { Buffer } from "buffer";

const message = Buffer.from("hello world!!");
const client = dgram.createSocket("udp4");
const HOST = "192.168.0.170";

client.send(message, 8080, HOST, (err) => {
  client.close();
});
