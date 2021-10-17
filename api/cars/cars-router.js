// DO YOUR MAGIC
const express = require("express");
const { getAll, getById, create } = require("./cars-router");
const db = require("../../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
