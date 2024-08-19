const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs")
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.listen(port, function () {
    console.log("Conneting.")
    console.log("Conneting..")
    console.log("Conneting...")
    console.log("Successfully connected port on🥳 " + port)
})