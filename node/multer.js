const express = require("express");
const app = express();
const multer = require("multer");
// default way of calling multer
// const upload = multer({ dest: "uploads/" });

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb ka 1st param me error hota h, aur 2nd me dest name
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `file-${Date.now()}.${ext}`);
  },
});

// Multer filter to filter diff kind of files
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF file!!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("multiPartForm");
});

app.post("/", upload.single("yourFile"), (req, res) => {
  console.log(req.file, req.body);
  res.send(req.file);
});

app.listen(3000);
