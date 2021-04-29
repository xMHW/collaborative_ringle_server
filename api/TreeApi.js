// //create Tree
// app.post ("/tree/create", (req, res) => {
//     const newTree = new Tree({
//         cards: req.body.cards,
//         page: 1,
//     })
//     Tree.create(newTree)
//     .then((dbTree) => {
//         console.log(dbTree);
//         res.json(dbTree);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.json(err);
//     });
// })

// //update Tree
// app.post ("/tree/update", (req, res) => {
//     Tree.updateOne({page: req.body.page}, {$set: {cards: req.body.cards}})
//     .then((dbTree) => {
//         console.log(dbTree);
//         res.json(dbTree);
//     });
// })

// //get Tree
// app.get("/tree/find/all", (req, res) => {
//     Tree.find({})
//     .then((dbTree) => {
//         res.json(dbTree)
//     })
//     .catch((err) => {
//         console.log(err);
//         res.json(err);
//     });
// })