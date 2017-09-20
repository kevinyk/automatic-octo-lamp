let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


// configure express app
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose');

let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, ()=>{
	console.log("listening on port 8000");
})