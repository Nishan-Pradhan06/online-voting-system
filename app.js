// Import the required modules
const express = require("express");
const { homePage, loginPage } = require("./controller/online_voting_controller");
const app = express();
const port = 3000;

// Set up the view engine to use EJS templates
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public/"));

// Define the route for the homepage and map it to the controller function
app.get('/', homePage);
// Define the route for the loginPage and map it to the controller function
app.get('/auth/login', loginPage);

// Start the server and listen on the specified port
app.listen(port, function () {
    console.log("Successfully connected port on🥳 " + port);
});
