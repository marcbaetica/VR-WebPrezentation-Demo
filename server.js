var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app')); 

//our homepage
app.get('/', function (req, res) {
	console.log('The homepage has been requested!')
	res.send("Hello World!");
	//res.sendFile(path.join(__dirname, "/app/index.html"));
});


app.listen(8080, function() {console.log("your app is located at port 8080!")});
