var express = require('express');
var router = express.Router();
var socket = require('socket.io')();
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();

/* GET home page. */

ee.on("internal event", function (data) {
  console.log(data)
});
router.get('/', function(req, res, next) {
   ee.emit('internal event', {'data': true})

  res.render('index', { title: 'Express' });
});

module.exports = router;
