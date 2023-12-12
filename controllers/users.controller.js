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
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
    
        // Data validation
        const validationResult = UserValidator.validate(data);
        if(validationResult.error){
            res.status(400).json({
                ok: false,
                error: `Connot create a user.`,
                details: validationResult.error,
                type: "JOI_DATA_VALIDATION"
            });
        }

        // Replace data with filterd validated data
        data = validationResult.value;
    
        // Instantiation of UsersModel to create new user
        const newUser = new UsersModel();

        // User data fill
        newUser.name = data.name;
        newUser.email = data.email;
        newUser.message = data.message;

        // User saving 
        await newUser.save();

    }catch(err){
        res.status(500).json({
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
    
}

/**
 * Send via a JSON Res all the users in the DB
 * @param {Express.Request} req The http request received
 * @param {Express.Response} res The http res sended
 */
exports.getAllUsers = async (req, res) => {

}

/**
 * Get one user by is _uuid
 * @param {Express.Request} req The http request received 
 * @param {Express.Response} res The http response sended 
 */
exports.getUserById = async (req, res) => {

}

/**
 * Update all the users
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response 
 */
exports.updateAllUsers = async (req, res) => {

}

/**
 * Update one user by his id
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response
 */
exports.updateOneUserById = async (req, res) => {

}

/**
 * Delete all users of the DB
 * @param {Express.Request} req The http response
 * @param {Express.Response} res The https response
 */
exports.deleteAllUsers = async (req, res) => {

}

/**
 * Delete one user by his id
 * @param {Express.Request} req The http request
 * @param {Express.Response} res The http response
 */
exports.deleteUserById = async (req, res) => {

}
