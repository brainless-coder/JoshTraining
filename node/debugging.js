const express = require("express");
const debug = require("debug");

debugError = debug("error");
debugWarn = debug("warn");

const app = express();

app.get("/", (req, res) => {
  // debugWarn("Warn Occured");
  // debugError("Error Occured");
  debugger;
  res.send({
    message: "Hello World",
  });
});

app.listen(3000);
