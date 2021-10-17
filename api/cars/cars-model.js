const db = require("../../data/db-config.js");

const getAll = async () => {
  return db("cars");
};

const getById = async (id) => {
  return db("cars").where("id", id).first();
};

const create = async ({ vin, make, model }) => {
  const [id] = await db("cars").insert({ vin, make, model });
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
};
