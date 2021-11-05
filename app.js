const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/database/db");

const app = express();
require("dotenv").config;
dotenv.config({ path: ".env" });

const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.options("*", cors());

app.use(morgan("dev"));

app.use(express.json({ limit: 1000000 }));
app.use(express.urlencoded({ limit: 1000000, extended: true }));

app.all("*", require("./src/routes/index"));

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () =>
  console.log(`Server Up and running on http://localhost:${PORT}`)
);
