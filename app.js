/**
 * Created By Ashen Priyankara
 */

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3100,
  mongoose = require('mongoose'),
  User = require('./api/models/users'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sc', { useMongoClient: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/router');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('server started on: ' + port);