// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    var hbsObject = {};
    res.render("../views/index", hbsObject);
  });

  app.get("/postlogin", function(req, res) {
    var hbsObject = {};
    res.render("../views/index2", hbsObject);
  });

  app.get("auth/google", function(req, res) {
      notLoggedIn()
      .done(console.log(res));
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  
  // // cms route loads cms.html
  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

  // app.get("/allservice", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });



};
