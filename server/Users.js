const mongoose = require("mongoose");

const UsersSchema = ({
    name: String,
    email: String,
    phone: String,
    password: String,
    picture: String
})

mongoose.model("users", UsersSchema);