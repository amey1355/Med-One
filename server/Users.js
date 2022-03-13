const mongoose = require("mongoose");

const UsersSchema = ({
    name: String,
    email: String,
    phone: String,
    password: String,
})

mongoose.model("users", UsersSchema);