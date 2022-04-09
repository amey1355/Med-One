const mongoose = require("mongoose");
const express = require('express');
const auth = require("./middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SignUpUsersSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})
SignUpUsersSchema.methods.generateAuthToken = async function () {
    try {
        console.log(this._id);
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY); //generating tokens
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    } catch (error) {
        res.send("the error part" + error);
        console.log("the error part" + error);
    }
}
//End of generating tokens


//Starting of Converting Password into hash
SignUpUsersSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})
//Ending of Converting Password into hash

mongoose.model("signUpusers", SignUpUsersSchema);