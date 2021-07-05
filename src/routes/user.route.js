const router = require("express").Router();
const {
  getUsers,
  createUser,
  updateUser,
  signIn,
} = require("../controllers/user.controller");
const isAuth = require("../middlewares/is-auth");

router
  .post("/", isAuth, createUser)
  .get("/", getUsers)
  .put("/", isAuth, updateUser)
  .post("/signin", isAuth, signIn);

module.exports = router;
