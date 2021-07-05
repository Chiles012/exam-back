const User = require("../models/user.models");
const asyncHandler = require("../middlewares/async");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { json } = require("express");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.getUSers();

  res.status(200).json({ users });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const { name, lastName, email, password, type } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.createUser(name, lastName, email, hashedPassword);

  const token = generateToken(email);
  res.status(200).json({ message: "Signed Up successfully", token: token });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const { name, lastName, email, id } = req.body;
  const user = await User.updateUser(id, name, lastName, email);

  res.status(200).json({ user });
});

exports.signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = User.getUser(email);
    if (!user) {
      throw Error("No user found");
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      throw Error("Wrong password");
    }
    const token = generateToken(email);
    json.status(200).json({ message: "Loggen In successfully", token: token });
  } catch (error) {
    console.log(error);
  }
});

const generateToken = (email) => {
  const token = jwt.sign(
    {
      email: email,
    },
    "contrasena",
    { expiresIn: "1h" }
  );
  return token;
};
