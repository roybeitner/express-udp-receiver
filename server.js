import express from "express";
import dgram from "dgram";

const socketServer = dgram.createSocket("udp4");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

socketServer.on("message", (msg, rinfo) => {
  console.log(`got messsage from ${rinfo.address}, data: ${msg}`);
});

app.listen(3000, () => {
  socketServer.bind(3000);
  console.log(`Backend started!`);
});
