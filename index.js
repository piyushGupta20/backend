require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./database/connect.js");
const cors = require("cors");
const Routes = require("./routes/routes.js");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

connection();

app.get("/", (req, res) => {
  res.send("Hello server is running");
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
