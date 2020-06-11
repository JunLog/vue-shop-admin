const express = require("express");
const compression = require("compression"); //gzip
// https
const https = require("https");
const fs = require("fs");

const app = express();

const options = {
  cert: fs.readFileSync("./full_chain.pem"),
  key: fs.readFileSync("./private.key"),
};

app.use(compression()); //在导入静态资源之前
app.use(express.static("../vue_shop/dist"));

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});

// https.createServer(options, app).listen(443);
