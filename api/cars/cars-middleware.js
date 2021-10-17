const Cars = require("./cars-router");

const checkCarId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Cars.findById(id);
    if (!car) {
      res.status(404).json({ message: `Car with id ${id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
};

const checkCarPayload = async (req, res, next) => {};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
