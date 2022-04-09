const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../signUpUsers.js")
require("../Users.js")
const Users = mongoose.model('users');
const signUpusers = mongoose.model('signUpusers');

// router.set('view-engine', 'ejs');
router.post("/signup", (req, res) => {
  // res.send("Welcome to MedOne from Router");
  console.log(req.body);
  const { email, password } = req.body;
  const suser = new signUpusers({ email, password });
  suser.save();
  // res.send("Hello");
});

//login check

router.post("/login", async (req, res) => {
  try {

      const email = req.body.email;
      const password = req.body.password;

      const useremail = await signUpusers.findOne({ email: email });

      const isMatch = await bcrypt.compare(password, useremail.password);

      // const token = await useremail.generateAuthToken();
      // console.log("the token part: " + token);

      // res.cookie("jwt", token, {
      //     expires: new Date(Date.now() + 600000), //expires in 10 minutes
      //     httpOnly: true

      // });

      if (isMatch) {
          res.status(201).render("login.ejs");
          console.log("Done");
      }
      else {
          res.send("Credentials not matching");
      }
  }
  catch (error) {
      res.status(400).send("Invalid Email");
      console.log(error);
  }
})

module.exports = router;