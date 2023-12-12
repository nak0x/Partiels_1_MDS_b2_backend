const MainRouter = require("express").Router();

// Routes imports
const UsersRoutes = require("./users.routes")

// Routes Middlewears
MainRouter.use("/users", UsersRoutes)

module.exports = MainRouter;