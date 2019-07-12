const mongoose = require("mongoose");
mongoose.set("debug", true); // to see mongo query
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
	keepAlive: true,
	useMongoClient: true
});

// bundle the models
module.exports.User = require("./user");