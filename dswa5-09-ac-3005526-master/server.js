var http = require('http');
var app = require('./config/express')();
const url =
'mongodb+srv://1234:1234@twitter.vw2tu.mongodb.net/DevWeb?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server escutando na porta ' + app.get('port'));
});