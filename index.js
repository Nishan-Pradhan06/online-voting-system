const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("html");
})

app.listen(port, function () {
    console.log("Conneting.")
    console.log("Conneting..")
    console.log("Conneting...")
    console.log("Successfully connected port on🥳 " + port)
})