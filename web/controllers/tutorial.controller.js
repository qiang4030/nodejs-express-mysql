const Tutorial = require("../models/tutorial.model");

const create = async (req, res) => {
  const result = await new Tutorial(req.body).create();
  res.send(result);
};

const findById = async (req, res) => {
  console.log(req.query);
  const result = await new Tutorial(req.params).findById();
  res.send(result);
};

const findAll = async (req, res) => {
  const result = await new Tutorial().findAll();
  res.send(result);
};

const findAllPublished = async (req, res) => {
  const result = await new Tutorial().findAllPublished();
  res.send(result);
};

const updateOne = async (req, res) => {
  const result = await new Tutorial(req.body, req.params).updateOne();
  res.send(result);
};

const deleteOne = async (req, res) => {
  const result = await new Tutorial(req.body, req.params).deleteOne();
  res.send(result);
};

const deleteAll = async (req, res) => {
  const result = await new Tutorial().deleteAll();
  res.send(result);
};

module.exports = {
  create,
  findAll,
  findById,
  findAllPublished,
  updateOne,
  deleteOne,
  deleteAll,
};
