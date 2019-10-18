const express = require('express');
const connectDB = require('./config/db.js')
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const PercentChart = require("./models/percentchart");
const FlavorPie = require("./models/flavorpie");

const NoSchema = require('./models/noschema');


connectDB();
// app.use(cors({ origin: true, credentials: false }));
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow_Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.options("*",cors());

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/geticecream', (req, res) => {

    NoSchema.find()
        .then(data => {
            console.log("SUCCESS")
            res.json(data)
        })
})

app.get("/update/", (req,res) => {
    
})

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));