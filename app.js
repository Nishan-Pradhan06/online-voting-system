// Import the required modules
const express = require("express");
const { homePage, loginPage, voterHomePage } = require("./controller/online_voting_controller");
const app = express();
const port = 3000;

// Set up the view engine to use EJS templates
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public/"));

// landing Page
app.get('/', homePage);

// Login page
app.get('/auth/login', loginPage);

//Voter Home Page
app.get('/dashboard/voters/home', voterHomePage);


app.get("/testing", (req, res) => {
    res.render("testing");
})

// Start the server and listen on the specified port
app.listen(port, function () {
    console.log("Successfully connected port on🥳 " + port);
});
