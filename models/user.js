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
    ]


});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;