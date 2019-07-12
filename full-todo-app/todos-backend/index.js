const express = require("express");
const app = express();
const cors = require("cors"); // cross origin resource sharing -> req to 3001 from 3000
const morgan = require("morgan"); //logging
const bodyParser = require("body-parser"); //get body
const todoRoutes = require("./routes/todos");

app.use(morgan("tiny"))
app.use(bodyParser.json())
app.use(cors())
app.use("/api/todos", todoRoutes);

app.use((req, res, next)=>{
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.send({
		message: err.message,
		error: err
	});
});

app.listen(3001, ()=>{
	console.log("Server running on PORT 3001");
});