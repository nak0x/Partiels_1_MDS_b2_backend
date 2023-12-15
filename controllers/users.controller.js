const UsersModel = require("../database/models/users.model"); 
const UserValidator = require("../database/validators/user.validator");

/**
 * Add a new user in the DB
 * @param {Express.Request} req The http req received
 * @param {Express.Response} res The http res sended
 */
exports.createNewUser = async (req, res) =>{
    // Try Catch prevent any error during user creation
    try{

        // Deconstruct of the request body
        let data = {
            ...req.body
        };
    
        // Data validation
        const validationResult = UserValidator.validate(data);
        if(validationResult.error){
            return res.status(400).json({
                ok: false,
                error: `Cannot create a user, incorect infos.`,
                details: validationResult.error,
                type: "JOI_DATA_VALIDATION"
            });
        }

        // Replace data with filterd validated data
        data = validationResult.value;

        // Check if user already exist
        if(await isExistingUser(data) == true){
            return res.status(400).json({
                ok: false,
                message: `User already exist`,
                details: `Cannot create a user that already exist`,
                type: `RESSOURCE_ALREADY_EXIST`
            })
        }
    
        // Instantiation of UsersModel to create new user
        const newUser = new UsersModel(data);

        // User saving 
        await newUser.save();

        return res.status(201).json({
            ok: true,
            message: `User ${newUser._id} have been created`
        })

    }catch(err){
        return res.status(500).json({
            ok: false,
            error: `An error occured while creating a new user`,
            details: err,
            type: "UNKNOWED_ERROR"
        })
    }
}

/**
 * Create or modify by full replace a user
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response
 */
exports.createOrModifyUser = async (req, res) => {
    // May have a user id in the req.params. See "../router/users.routes.js:8:21"
    const userId = req.params.id;
    
    // Errors handler
    try{

        // Deconstruct of the request body
        let data = {
            ...req.body
        };
    
        // Data validation
        const validationResult = UserValidator.validate(data);
        if(validationResult.error){
            return res.status(400).json({
                ok: false,
                error: `Connot create a user.`,
                details: validationResult.error,
                type: "JOI_DATA_VALIDATION"
            });
        }

        // Replace data with filterd validated data
        data = validationResult.value;

        if(userId){
    
            // Finding the user
            const user = await UsersModel.findById(userId);
    
            // If a user really exist
            if(user){

                // Full update of the user
                await UsersModel.findByIdAndUpdate(userId, {
                    $set:{
                        ...data
                    }
                })

                // Send 201 - Response
                return res.status(201).json({
                    ok: true,
                    message: `New user ${userId} have being updated !`
                })
            }
            // ajout gestoion cas id pas trouve
        }else{

            // Check if user already exist
            if(await isExistingUser(data) == true){
                return res.status(400).json({
                    ok: false,
                    message: `User already exist`,
                    details: `Cannot create a user that already exist`,
                    type: `RESSOURCE_ALREADY_EXIST`
                })
            }
            
            // Create a new user
            const newUser = new UsersModel(data);

            // Send the new user to the db
            await newUser.save();

            // Send 201 - response
            return res.status(201).json({
                ok: true,
                message: `New user ${newUser._id} have being created !`
            })
        }
    }catch(err){
        return res.status(500).json({
            ok: false,
            error: `An error occured while creating of modifying the user`,
            details: err,
            type: "INTERAL_SERVER_ERROR"
        })
    }

}

/**
 * Get one user by is _uuid
 * @param {Express.Request} req The http request received 
 * @param {Express.Response} res The http response sended 
 */
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    // handle error during reaching the user
    try{

        const user = await UsersModel.findById(userId).exec();

        return res.status(200).json({
            ok: true,
            message: `User ${userId} have being finded`,
            data: user
        })

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: `An error occured while trying to reach the user`,
            error: err,
            details: `INTERNAL_SERVER_ERROR`
        })
    }
}

/**
 * Send via a JSON Res all the users in the DB
 * @param {Express.Request} req The http request received
 * @param {Express.Response} res The http res sended
 */
exports.getAllUsers = async (req, res) => {
    // Error from getting user handler
    try{
        const allUser = await UsersModel.find().exec();
        return res.status(200).json({
            ok: true,
            message: `All users have being finded`,
            data: allUser
        })
    }catch(err){
        return res.status(500).json({
            ok: false,
            message: `An error occured while reaching all users`,
            details: err,
            type: `INTERNAL_SERVER_ERROR`
        })
    }
}

/**
 * Update one user by his id
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response
 */
exports.updateOneUserById = async (req, res) => {
    const userId = req.params.id;

    // Update error handler
    try{

        // Deconstruc req.body
        const data = {
            ...req.body
        }

        // validate data
        const validationResult = UserValidator.validate(data);

        if(validationResult.error){
            return res.status(400).json({
                ok: false,
                message: `An wrong data sended`,
                details: validationResult.error,
                type: `WRONG_TYPE_ERROR`
            })
        }

        // Find one user and update
        await UsersModel.findByIdAndUpdate(userId, {
            $set: data
        })

        // Get the new user
        const user = await UsersModel.findById(userId);

        // Return the res
        return res.status(200).json({
            ok: true,
            message: `User ${userId}, have being modified`,
            data: user
        })

    }catch(err){
        return res.status(500).json({
            ok: false,
            message: `An error occured while trying to update a user`,
            details: err,
            type: `INTERNAL_SERVER_ERROR`
        })
    }
}

/**
 * Delete all users of the DB
 * @param {Express.Request} req The http response
 * @param {Express.Response} res The https response
 */
exports.deleteAllUsers = async (req, res) => {
    // Deletion error handler
    try {

        // Delete all users in the db
        const amountDeleted = await UsersModel.deleteMany({});

        // Return the res
        return res.status(200).json({
            ok: true,
            message: `${amountDeleted.deletedCount} users have being deleted !`
        })

    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: `An error occured while deleting all the users`,
            details: err,
            type: `INTERNAL_SERVER_ERROR`
        })
    }
}

/**
 * Delete one user by his id
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response
 */
exports.deleteUserById = async (req, res) => {
    const userId = req.params.id;
    if(!userId) return res.status(500).json({
        ok: false,
        message: `No id provided`,
        error: `Wrong or no id provided`,
        type: `WRONG_API_USAGE`
    })
    // Deletion error handler
    try {
        // Find and delete the user
        const deletionData = await UsersModel.deleteOne({_id: userId});


        if(deletionData.deletedCount >= 1){
            return res.status(200).json({
                ok: true,
                message: `User ${userId} have being deleted`
            })
        }

        return res.status(400).json({
            ok: false,
            message: `No users finded with this id`,
            error: `Wrong id`,
            type: `WRONG_API_USAGE`
        })
    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: `An errore occured while deleting the user`,
            details: err,
            type: `INTERNAL_SERVER_ERROR`
        })
    }
}


// Utilities functions

/**
 * Return true is the user already exist and false if not
 * @param {Object} data All the user data validate by UserValidator.validate()
 * @returns {Boolean | Number} True if user exist false if not, -1 if error
 */
async function isExistingUser(data){
    // Error handler
    try{

        // Validate user object in case of non conformity
        const validationResult = UserValidator.validate(data);

        if(validationResult.error){
            return false
        }

        // Check if user email exist
        const user = await UsersModel.findOne({
            email: validationResult.value.email
        }).exec();

        if(user){
            return true
        }

        return false

    }catch(err){
        return false
    }
}