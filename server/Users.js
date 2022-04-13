const mongoose = require("mongoose");
const express = require('express');
const UsersSchema = ({
    name: String,
    lname: String,
    email: String,
    phone: String,
    password: String,
    picture: String,
    address: String,
    gender: String,
})

mongoose.model("users", UsersSchema);