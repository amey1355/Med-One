const mongoose = require("mongoose");
const express = require('express');
const UsersSchema = ({
    name: String,
    email: String,
    phone: String,
    password: String,
    picture: String
})

mongoose.model("users", UsersSchema);