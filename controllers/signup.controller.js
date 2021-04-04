const Signup = require("../models/signup.models");
const uuid = require("node-uuid");

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = { email, password, verify_code: uuid() };
  } catch (error) {
    res.senStatus(500);
  }
};

module.exports = {
  createUser,
};
