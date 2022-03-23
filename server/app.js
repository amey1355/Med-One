const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Users");
const cors = require('cors');
// const { json } = require("express");
app.use(bodyParser.json());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    // origin: "http://localhost:19006",
    origin: "*",
}))

// // Image upload section
// require("dotenv").config();
// const upload = require("./routes/upload");
// const Grid = require("gridfs-stream");
// let gfs;
// mongoose.connection.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection("photos");
// });
// app.use("/file", upload);
// // media routes
// app.get("/file/:filename", async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send("not found");
//     }
// });

// app.delete("/file/:filename", async (req, res) => {
//     try {
//         await gfs.files.deleteOne({ filename: req.params.filename });
//         res.send("success");
//     } catch (error) {
//         console.log(error);
//         res.send("An error occured.");
//     }
// });
// // Image upload section




const Users = mongoose.model("users");
const mongoUri = "mongodb+srv://amey:amey1355@cluster0.bsn6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error", (err) => {
    console.log("Error", err);
})

app.get('/', (req, res) => {
    res.send("Welcome to MedOne");
});

app.get('/get-data', (req, res) => {
    Users.find({}).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    })
});

app.post('/send-data', (req, res) => {
    // console.log(req.body);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        picture: req.body.picture,
    })
    users.save()
        .then(data => {
            console.log(data);
            // res.send("success");
        }).catch(err => {
            console.log(err);
        })
});
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.post('/delete', (req, res) => {
    Users.findByIdAndRemove(req.body.id)
        .then(data => {
            console.log(data);
            res.send("deleted");
        })
})

app.post('/update', (req, res) => {
    Users.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        picture: req.body.picture,
    })
        .then(data => {
            console.log(data);
            res.send("updated");
        })
})


app.listen(3000, () => {
    console.log("server running on port 3000");
});