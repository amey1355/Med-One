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
    purchasedmeds: [{
        name: {
            type: String,
            // required: true
        },
        price: {
            type: String,
        },
        category: {
            type: String,
        },
        quantity: {
            type: Number,
        }
    }],
})

mongoose.model("users", UsersSchema);