require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("./Users");
require("./signUpUsers.js");
const cors = require("cors");
const { json } = require("express");

app.set('view-engine', 'ejs');

app.use(bodyParser.json());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.use(
  cors({
    // origin: "http://localhost:19006",
    origin: "*",
  })
);

const Users = mongoose.model("users");
const authRoutes = require('./routes/authRoutes');
// const signUpusers = require('./signUpUsers');
const signUpusers = mongoose.model('signUpusers');
// app.use(authRoutes);

const mongoUri =
  "mongodb+srv://amey:amey1355@cluster0.bsn6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error", err);
});

app.get("/", (req, res) => {
  res.send("Welcome to MedOne");
});

app.get("/get-data", (req, res) => {
  Users.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/send-data", (req, res) => {
  // console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  const users = new Users({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    picture: req.body.picture,
  });
  users
    .save()
    .then((data) => {
      console.log(data);
      // res.send("success");
    })
    .catch((err) => {
      console.log(err);
    });
});
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.post("/delete", (req, res) => {
  Users.findByIdAndRemove(req.body.id).then((data) => {
    console.log(data);
    res.send("deleted");
  });
});

app.post("/update", (req, res) => {
  Users.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    picture: req.body.picture,
  }).then((data) => {
    console.log(data);
    res.send("updated");
  });
});

// AuthRoutes Section
app.post("/signup", (req, res) => {
  // res.send("Welcome to MedOne from Router");
  console.log(req.body);
  const { email, password } = req.body;
  const suser = new signUpusers({ email, password });
  suser.save();
  res.send("Hello");
});

//login check
// app.get("/login", (req, res) => {
//   res.render("login.ejs")
// })

app.post("/login", async (req, res) => {
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
//login check


app.listen(3000, () => {
  console.log("server running on port 3000");
});
