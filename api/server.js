const express = require("express");

const Users = require("../users/users-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use('/api/users', Users)


module.exports = server;