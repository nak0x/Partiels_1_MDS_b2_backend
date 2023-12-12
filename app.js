const express = require("express");
const cors = require("cors")
const app = express();
const DatabaseSetup = require("./database/setup.db")

// Environnements setup
require("dotenv").config();

// Middlewears
app.use(express.json())
app.use(cors());

// Router
const router = require("./router/index.routes");
app.use("/api", router);

// Public files
app.use(express.static("public"))

app.listen(process.env.SERVER_PORT,async ()=>{
    if(await DatabaseSetup(process.env.DB_URI, true)){
        console.log(`Server is up and running ! Server port : ${process.env.SERVER_PORT}`);
    }
})