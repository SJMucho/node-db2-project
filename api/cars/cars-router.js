// DO YOUR MAGIC
const express = require("express");
const Cars = require("./cars-router");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Cars.get();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// router.get("/:id", async (req,res) => {

// })

// router.create("/", async (req,res) => {

// })

module.exports = router;
