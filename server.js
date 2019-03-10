var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");


var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

mongoose.Promise = Promise;

mongoose.connect=process.env.MONGODB_URI || ("mongodb://heroku_gl97rz36:kkrgnbqalpuel864mrc5ioilrf@ds245234.mlab.com:45234/heroku_gl97rz36" , {
	useMongoClient: true
});

// var MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost/newsscraperdb";

// mongoose.connect(MONGODB_URI);

// var MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://heroku_gl97rz36:password@ds245234.mlab.com:45234/heroku_gl97rz36";

// mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
