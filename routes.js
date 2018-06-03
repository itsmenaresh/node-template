const express = require("express");
const nodeMailer = require("nodemailer");

const Router = express.Router();

Router.get("/", (req, res) => res.send("API get call"));
Router.post("/", (req, res) => {});

module.exports = Router;