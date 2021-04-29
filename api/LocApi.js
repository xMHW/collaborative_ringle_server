// //create loc
// app.post("/loc/create", (req, res) => {
//     const newLoc = new Loc({
//         refs: req.body.refs,
//         page: 0,
//     })
//     Loc.create(newLoc)
//         .then((dbLoc) => {
//             console.log(dbLoc);
//             res.json(dbLoc);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// })

// //update loc
// app.post("/loc/update", (req, res) => {
//     Loc.updateOne({page: req.body.page}, {$set: {refs: req.body.refs}})
//         .then((dbLoc) => {
//             console.log(dbLoc);
//             res.json(dbLoc);
//         })
// })
// //get all loc
// app.get("/loc/find/all", (req, res) => {
//     Loc.find({})
//     .then((dbLoc) => {
//         res.json(dbLoc)
//     })
//     .catch((err) => {
//         console.log(err);
//         res.json(err);
//     });
// })