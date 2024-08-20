// Controller function for the home page or first landing page
exports.homePage = (req, res) => {
    res.render("index");
};

// Controller function for the auth login page
exports.loginPage = (req, res) => {
    res.render("auth/login");
};

exports.voterHomePage = (req, res) => {
    res.render("dashboard/voters/home");
};
