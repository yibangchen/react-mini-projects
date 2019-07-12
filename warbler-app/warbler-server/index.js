/*jslint
	white
*/
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const PORT = 8081;
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
// all app routes

// if no routes above can resolve, 404 handler
app.use(function(req, res, next){
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
	console.log(`Server is starting on PORT ${PORT}`);
})