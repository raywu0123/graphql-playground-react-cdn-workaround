var express = require('express');
var app = express();
 
//setting middleware
app.use(express.static(__dirname + '/node_modules')); //Serves resources from public folder

var PORT = 8080; 
var server = app.listen(PORT, () => {
    console.log("Serving files at PORT", PORT);
});