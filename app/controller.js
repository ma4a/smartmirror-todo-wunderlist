'use strict';

var ical = require('ical');

exports.get = (params) => {

  var url = params.url;
  var limit = params.limit;

  return new Promise((resolve, reject) => {

    var events = [];
    var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

    ical.fromURL(url, {}, function(err, data) {
      if (err) {
        console.log(err);
        reject(err);
      }
      var i=0;
      limit>0 ? limit : limit=3; //only return 3 entries if no limit is set by user

      for (var k in data){
        if (i++<limit && data.hasOwnProperty(k)) {
          var ev = data[k]
          //console.log(ev);
          events.push(ev);
        }
      }

      resolve(events)
    });
  });
}
