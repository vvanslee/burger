var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

app.set('port', (process.env.PORT || 3000));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", routes);
app.listen(app.get('port'), function() {
    console.log("App listening on PORT " + app.get('port'));
});