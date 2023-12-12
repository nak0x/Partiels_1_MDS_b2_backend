const UserRouter = require("express").Router();
const UserController = require("../controllers/users.controller")

// User CRUD

// Create - tested
UserRouter.post('/', UserController.createNewUser); // Creation
UserRouter.put("/:id?", UserController.createOrModifyUser); // Create of full modify

// Read - tested
UserRouter.get("/all", UserController.getAllUsers); // Global
UserRouter.get("/:id", UserController.getUserById); // Specific

// Update - tested
UserRouter.patch("/:id", UserController.updateOneUserById); // Specific

// Delete - tested
UserRouter.delete("/all", UserController.deleteAllUsers); // Global
UserRouter.delete("/:id", UserController.deleteUserById); // Specific

module.exports = UserRouter;