var express = require("express");
var method = require("method-override");
var bodyparser = require("body-parser")

var PORT = process.env.PORT || 3000;

//express
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({extended: false}));

//method-override
app.use(method("_method"));

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
    console.log("listening at port:" + PORT);
});
