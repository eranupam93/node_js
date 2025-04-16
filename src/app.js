// import express from 'exrpess'
const express = require('express')
const { authAdmin } = require('./middleware/auth')

const app = express()

const port = 5000


app.use("/admin", authAdmin)

app.use("/admin/getData", (req, res) => {
    res.send("Get Admin Data")
    // res.send("Hello from test")
})

// app.use("/test", (req, res, next) => {
//     console.log("first middle ware")
//     next()
//     // res.send("Hello from test")
// }, (req, res, next) => {
//     console.log("second middleware")
//     next()
// }, (req, res) => {
//     console.log("third middleware")
//     res.send("Working fine")
// })



// ----------------------Dyanmic routes
// localhost:5000/user/707/8850749409
// app.get("/user/:userID/:mobile_no", (req, res) => {
//     res.send(req.params)
// })



//------------------------Query Parameter
// localhost:5000/user?name='Anupam'&mobile_no=8850749409
// app.get("/user/", (req, res) => {
//     res.send(req.query)
// })




// -----------------just req handler
// app.use((req, res) => {
//     res.send("Hello from server")
// })

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})