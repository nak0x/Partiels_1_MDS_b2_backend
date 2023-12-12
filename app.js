const express = require("express");
const app = express();
const DatabaseSetup = require("./database/setup.db")

// Environnements setup
require("dotenv").config();

// Router
const router = require("./router/index.routes");
app.use("/api", router);

// Public files
app.use(express.static("public"))

app.listen(process.env.SERVER_PORT,async ()=>{
    if(await DatabaseSetup("/", true)){
        console.log(`Server is up and running ! Server port : ${process.env.SERVER_PORT}`);
    }
})