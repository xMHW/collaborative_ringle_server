const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Card = require("./models/Card");
const Tree = require("./models/Tree");

// Setup express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

// Configure Mongo
const db = "mongodb://127.0.0.1:27017";

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server up and running on port ${port}.`));
//create Tree
app.post ("/tree/create", (req, res) => {
    const newTree = new Tree({
        cards: req.body.cards,
        page: 1,
    })
    Tree.create(newTree)
    .then(function(dbTree) {
        console.log(dbTree);
        res.json(dbTree);
    })
    .catch(function(err) {
        console.log(err);
        res.json(err);
    });
})

//update Tree
app.post ("/tree/update", (req, res) => {
    Tree.updateOne({page: req.body.page}, {$set: {cards: req.body.cards}})
    .then(function(dbTree){
        console.log(dbTree);
        res.json(dbTree);
    });
})

//CARD SAVE
app.post("/card/create", (req, res) => {
    const newCard = new Card({
        content: req.body.content,
        created: req.body.created,
        updater: req.body.updater,
        cardposition: req.body.cardposition,
    })
    Card.create(newCard)
        .then(function(dbProduct) {
            // View the added result in the console
            console.log(dbProduct);
            res.json(dbProduct);
        })
        .catch(function(err) {
            // If an error occurred, log it
            console.log(err);
            res.json(err);
        });
})

//CARD UPDATE
app.post("/card/update", (req,res) => {
    Card.updateOne({cardposition: req.body.cardposition}, {$set: {content: req.body.content, created: req.body.created}})
        .then(function(dbProduct){
            console.log(dbProduct);
            res.json(dbProduct);
        })
})

//Card Delete
app.post("/card/delete", (req, res) => {
    Card.findOneAndRemove({cardposition: req.body.cardposition})
        .then(function(dbProduct){
            console.log(dbProduct);
            res.json(dbProduct);
        })
})

//모든 card 데이터 가져오기
app.get("/card/find/all", (req, res) =>{
    Card.find({})
    .then(function(dbProduct) {
        res.json(dbProduct);
    })
    .catch(function(err) {
       console.log(err);
       res.json(err);
    });
})

app.post("/card/find", (req, res) => {
    Card.find({cardposition: req.body.cardposition})
    .then(function(dbProduct){
        console.log(dbProduct);
        res.json(dbProduct);
    })
})






