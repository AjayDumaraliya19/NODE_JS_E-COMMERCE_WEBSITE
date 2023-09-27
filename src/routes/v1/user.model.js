const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/* Create User */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/* Get User list */
router.get(
  "/user-list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/* Get User details by Id */
router.get(
  "/user-details/:userId",
  validate(userValidation.getUserById),
  userController.getUserById
);

/* User details update by id */
router.put(
  "/update-user/:userId",
  validate(userValidation.updateUser),
  userController.updateUser
);

/* Delete User */
router.delete(
  "/delete-user/:userId",
  validate(userValidation.getUserById),
  userController.deleteUser
);

module.exports = router;
