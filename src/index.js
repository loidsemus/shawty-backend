require('dotenv').config()
const express = require("express");
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("use an endpoint lol")
})

const shortenRoute = require("./routes/shorten")
app.use("/shorten", shortenRoute)

app.listen(port, () => {
    console.log("Listening on port " + port)
})