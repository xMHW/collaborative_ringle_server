const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Card = require("./models/Card");
const Tree = require("./models/Tree");
const Loc = require("./models/Loc");

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
const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

const io = require('socket.io')(5000, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
});

io.on("connection", socket => {
    let deltaTree = [];
	console.log("connected");
    socket.on("send-changes", (deltamap) => {
        console.log(deltamap);
        socket.broadcast.emit("receive-changes", deltamap);
    });
    socket.on("send-tree-changes", (deltamap) => {
        if(deltaTree != deltamap["delta"]){
            socket.broadcast.emit("receive-tree-changes", deltamap);
            deltaTree = deltamap["delta"];
        };
    })
});

//create Tree
app.post ("/tree/create", (req, res) => {
    const newTree = new Tree({
        cards: req.body.cards,
        page: 1,
    })
    Tree.create(newTree)
    .then((dbTree) => {
        console.log(dbTree);
        res.json(dbTree);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

//update Tree
app.post ("/tree/update", async (req, res) => {
    // Tree.updateOne({page: req.body.page}, {$set: {cards: req.body.cards}})
    // .then((dbTree) => {
    //     console.log(dbTree);
    //     res.json(dbTree);
    // });

    const doc = await Tree.findOne({page: req.body.page});
    doc.cards = req.body.cards;
    const success = await doc.save();
    res.json(success);
})

//get Tree
app.get("/tree/find/all", (req, res) => {
    Tree.find({})
    .then((dbTree) => {
        res.json(dbTree)
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

//create loc
app.post("/loc/create", (req, res) => {
    const newLoc = new Loc({
        refs: req.body.refs,
        page: 0,
    })
    Loc.create(newLoc)
        .then((dbLoc) => {
            console.log(dbLoc);
            res.json(dbLoc);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
})

//update loc
app.post("/loc/update", (req, res) => {
    Loc.updateOne({page: req.body.page}, {$set: {refs: req.body.refs}})
        .then((dbLoc) => {
            console.log(dbLoc);
            res.json(dbLoc);
        })
})
//get all loc
app.get("/loc/find/all", (req, res) => {
    Loc.find({})
    .then((dbLoc) => {
        res.json(dbLoc)
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

//CARD SAVE
app.post("/card/create", (req, res) => {
    const newCard = new Card({
        content: req.body.content,
        created: req.body.created,
        updater: req.body.updater,
    })
    Card.create(newCard)
        .then((dbCard) => {
            // View the added result in the console
            console.log(dbCard);
            res.json(dbCard);
        })
        .catch((err) => {
            // If an error occurred, log it
            console.log(err);
            res.json(err);
        });
})

//CARD UPDATE
app.post("/card/update", async(req,res) => {
    const doc = await Card.findOne({_id: req.body._id});
    doc.content = req.body.content;
    doc.updater = req.body.updater;
    const success = await doc.save();
    res.json(success);
})

//Card Delete
app.post("/card/delete", (req, res) => {
    Card.findOneAndRemove({_id: req.body._id})
    .then((dbCard) => {
        console.log(dbCard);
        res.json(dbCard);
    })
})

//모든 card 데이터 가져오기
app.get("/card/find/all", (req, res) =>{
    Card.find({})
    .then((dbCard) => {
        res.json(dbCard);
    })
    .catch((err) => {
        console.log(err);
        res.json(err);
    });
})

//특정 card 데이터 가져오기
app.post("/card/find", (req, res) => {
    Card.findOne({_id: req.body._id})
    .then((dbCard) => {
        console.log(dbCard);
        res.json(dbCard);
    })
})


// Card.updateOne({_id: req.body._id}, {$set: {content: req.body.content, created: req.body.created, updater: req.body.updater}})
//     .then((dbCard) => {
//         console.log(dbCard);
//         res.json(dbCard);
//     })
