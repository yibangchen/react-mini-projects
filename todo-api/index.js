var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todo');

app.get('/', (req, res)=> {
	res.send("Hi there from express");
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
	console.log("app listening on port " + port);
});
