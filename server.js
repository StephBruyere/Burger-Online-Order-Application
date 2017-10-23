var express = require("express");
var method = require("method-override");
var bodyparser = require("body-parser")

var port = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);
app.listen(port);
