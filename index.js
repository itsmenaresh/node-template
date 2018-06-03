const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./routes");
const port = process.env.port || 3000;

const app = express();
// mongoose.connect("mongodb://localhost/collectionName");

app.use("/api/user", Router);


app.listen(port, () => console.log(`app running on port ${port}`));