const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating template for database data to be stored in Mongo.db collection 
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    groceryList: [
        {
            type: Schema.Types.ObjectId,
            ref: "Foods"

        }
    ],

    id: {
        type: String,
        unique: true,
        required: true
    }
});

//schema being stored in variable 
const Users = mongoose.model("Users", userSchema);

module.exports = Users;