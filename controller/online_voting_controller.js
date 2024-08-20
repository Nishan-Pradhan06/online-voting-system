// Controller function for the home page or first landing page
exports.homePage = (req, res) => {
    // Render the "index.ejs" template when the home page is requested
    res.render("index");
};
// Controller function for the auth login page
exports.loginPage = (req, res) => {
    // Render the "index.ejs" template when the home page is requested
    res.render("auth/login");
};
