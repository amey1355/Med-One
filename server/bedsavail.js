const mongoose = require("mongoose");
const express = require('express');
const BedsAvailableSchema = ({
    id: String,
    name: String,
    location: String,
    price: String,
    image: String,
    available: String,
    details: String,
})

mongoose.model("bedsavail", BedsAvailableSchema);