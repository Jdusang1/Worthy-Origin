const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Users = mongoose.model("Users", userSchema);

module.exports = Users;