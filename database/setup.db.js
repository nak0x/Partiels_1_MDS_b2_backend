const mongoose = require("mongoose")

async function setupDb(DB_URI, allow_retries=false){
    try{
        await mongoose.connect(DB_URI);
        console.log("Database connection established");
        return {status: true, err: null};
    }catch(err){
        console.error(`An error occured while connecting to the DB : ${err.toString()}`);
        // Allow 3 retries if failds and allow_retries
        if(allow_retries){
            console.error("Retrying to connect to mongoDB...");
            for (let i = 0; i < 3 ; i++) {
                console.error(`Retring ...`);
                try {
                    await mongoose.connect(DB_URI);
                    console.log("Database connection established");
                    return true;
                } catch (retry_err) {
                    console.error(`Retry failed. Err: ${retry_err.toString()}`);
                }
            }
        }
        return {status: false, err};
    }
}

module.exports = setupDb