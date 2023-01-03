require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const router = require("./routes");
const email = require("./routes/email");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.use("/email", email);

app.get("*", (req, res) => {
  res.send("주소존재안함");
});

app.listen(port, () => {
  console.log(`server open: ${port}`); //${}안은변수
});
