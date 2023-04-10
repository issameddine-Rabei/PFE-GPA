const express = require("express");

const subUserRouter = require("./subUserRoute");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");

const {
  getUserByIdValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require("../utils/validators/userValidator");

const router = express.Router();

router.use("/:userId/subusers", subUserRouter);

router.route("/").get(getAllUsers);

router.route("/create").post(createUserValidator, createUser);

router
  .route("/:id")
  .get(getUserByIdValidator, getUserById)
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

  router.route("/login").post(loginUser);

module.exports = router;

