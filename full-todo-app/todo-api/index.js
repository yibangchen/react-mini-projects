var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

var todoRoutes = require('./routes/todo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
	res.sendFile('index.html');
})

app.get('/', (req, res)=> {
	res.send("Hi there from express");
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
	console.log("app listening on port " + port);
});
