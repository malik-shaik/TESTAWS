const express = require("express");
const app = express();
const fs = require("fs");

port = 80;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/staticfile.html");
});

const serverSidePage = fs.readFileSync(
  __dirname + "/public/serverside.html",
  "utf8"
);
app.get("/ssr", (req, res) => {
  return res.send(serverSidePage);
});

app.listen(port, (err) => {
  if (err) console.log("Server not running. ERROR:  ", err);
  console.log("Server running on port ", port);
});
