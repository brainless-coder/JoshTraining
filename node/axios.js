const express = require("express");
const app = express();
// .default use karne se, intellisense ka access mil jaata h
const axios = require("axios").default;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// making axios request using chaining
// app.get("/", (req, res) => {
//   axios
//     .get("https://reqres.in/api/users", {
//       params: {
//         page: 1,
//         delay: 3
//       }
//     })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send("Error occured");
//     }).then(() => {
//       console.log('Mai rukega nhi, hamesa chalega');
//     })
// });

// making axios request using async/await
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users", {
      params: { page: 1 },
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send("Eror aa gya h, jaake dekh");
  } finally {
    console.log("Mai maanega nhi, hamesa chalega");
  }
});

app.post("/", (req, res) => {
  axios
    .post("https://reqres.in/api/users", {
      name: req.body.name,
      job: req.body.job,
    })
    .then((response) => {
      // console.log(response.status, response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send("Error aa gya hai");
    })
    .then(() => {
      console.log("Finally block executes");
    });
});

// Perfoming multiple concurrent requests
async function getSingleUser() {
  let result = await axios.get("https://reqres.in/api/users/2");
  return result;
}

async function getSingleResource() {
  let result = await axios.get("https://reqres.in/api/unknown/2");
  return result;
}

app.get("/userResource", async (req, res) => {
  let user = await getSingleUser();
  // console.log("User Data  ====>  " + JSON.stringify(user.data));
  let resource = await getSingleResource();
  // console.log("Resource Data  ====>  " + JSON.stringify(resource.data));

  res.send(`${JSON.stringify(user.data)}  ${JSON.stringify(resource.data)}`);
});

app.listen(3000, () => {
  console.log("Server is listening on Port 3000");
});
