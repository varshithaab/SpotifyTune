require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const searchRoutes = require("./model/search");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", searchRoutes)
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));