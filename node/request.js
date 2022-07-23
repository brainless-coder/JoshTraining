const express = require("express");
const app = express();
const request = require("request");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set('views', 'views');

app.get("/", (req, res) => {
  let getUsers = new Promise((resolve, reject) => {
    request("https://reqres.in/api/users", (error, response, body) => {
      console.error(`error: ${error}`);
      if (error) reject(error);
      console.log(`StatusCode: ${response && response.statusCode}`);
      // console.log(`Response Body: ${response && response.body}`);
      // console.log(`Body: ${body}`);
      if (response.statusCode == 200) resolve(body);
      reject({
        status: response.statusCode,
        msg: "Error Occured",
      });
    });
  });

  getUsers.then(
    (success) => {
      console.log("success promise call====>  ", typeof success);
      res.send(JSON.parse(success));
    },
    (err) => {
      console.log("err promise call====>  ", err);
      res.send(err);
    }
  );
});

app.get("/microservices", (req, res) => {
  request(
    "https://docs.microsoft.com/en-us/azure/architecture/includes/images/microservices-logical.png"
  ).pipe(fs.createWriteStream("microservices.png"));

  res.send("Image fetched successfully");
});

// request me apan .on() karke alag alg listeners ka bhi use kar sakte h

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/form", (req, res) => {
  let { name, age } = req.body;
  console.log(name, age);
  res.send("Data Fetched");
});

app.listen(3000);
