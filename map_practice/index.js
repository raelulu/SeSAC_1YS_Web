const express = require("express");
const app = express();
const port = 8000;
const router = require("./routes");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.get("*", (req, res) => {
  res.send("주소존재안함");
});

app.listen(port, () => {
  console.log(`server open: ${port}`); //${}안은변수
});
