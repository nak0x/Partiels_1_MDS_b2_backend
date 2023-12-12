const UserRouter = require("express").Router();
const UserController = require("../controllers/users.controller")

// User CRUD

// Create
UserRouter.post('/', UserController.createNewUser);
UserRouter.put("/:id", UserController.createOrModifyUser);

// Read
UserRouter.get("/all", UserController.getAllUsers);
UserRouter.get("/:id", UserController.getUserById);

// Update
UserRouter.patch("/:id", UserController.updateOneUserById);
UserRouter.patch("/all", UserController.updateAllUsers);

// Delete
UserRouter.delete("/:id", UserController.getUserById);
UserRouter.delete("/all", UserController.deleteAllUsers);


module.exports = UserRouter;