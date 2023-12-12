const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type: String,
        max: [512, "Too long name for the new user"],
        require: [true, "An name is required for creating a new user"]
    },
    email : {
        type: String,
        validate: {
            validator: function(v){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
                // return! !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); OLD
            },
            message: props => `${props.value} is not a valid email adress`
        },
        require: [true, "An email is required for creating a new User"],
        unique: [true, "User must be unique"]
    },
    message : {
        type: String,
        max: [4096, "Too long message for the new user"],
        require: [true, "A contact message is required for creating a new user"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);