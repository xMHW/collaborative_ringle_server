// //CARD SAVE
// app.post("/card/create", (req, res) => {
//     const newCard = new Card({
//         content: req.body.content,
//         created: req.body.created,
//         updater: req.body.updater,
//         cardposition: req.body.cardposition,
//     })
//     Card.create(newCard)
//         .then((dbCard) => {
//             // View the added result in the console
//             console.log(dbCard);
//             res.json(dbCard);
//         })
//         .catch((err) => {
//             // If an error occurred, log it
//             console.log(err);
//             res.json(err);
//         });
// })

// //CARD UPDATE
// app.post("/card/update", (req,res) => {
//     Card.updateOne({cardposition: req.body.cardposition}, {$set: {content: req.body.content, created: req.body.created}})
//         .then((dbCard) => {
//             console.log(dbCard);
//             res.json(dbCard);
//         })
// })

// //Card Delete
// app.post("/card/delete", (req, res) => {
//     Card.findOneAndRemove({cardposition: req.body.cardposition})
//         .then((dbCard) => {
//             console.log(dbCard);
//             res.json(dbCard);
//         })
// })

// //모든 card 데이터 가져오기
// app.get("/card/find/all", (req, res) =>{
//     Card.find({})
//     .then((dbCard) => {
//         res.json(dbCard);
//     })
//     .catch((err) => {
//        console.log(err);
//        res.json(err);
//     });
// })

// //특정 card 데이터 가져오기
// app.post("/card/find", (req, res) => {
//     Card.find({cardposition: req.body.cardposition})
//     .then((dbCard) => {
//         console.log(dbCard);
//         res.json(dbCard);
//     })
// })

