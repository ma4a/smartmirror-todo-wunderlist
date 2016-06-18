'use strict';

var express = require('express');
var app = express();

var controller = require('./app/controller');

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  let url = 'https://a.wunderlist.com/api/v1/ical/xyz-replace-this.ics' //override for test purpose
  let limit = 4;
    controller.get({url: url, limit: limit})
      .then((events) => {
        res.render('app/view.jade', {
          events: events
        });
      });
});

app.listen(8080, function () {
  console.log('Module is listening on port 8080!');
});