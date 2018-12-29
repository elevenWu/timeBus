var express = require('express');
var router = express.Router();
var category =require('../models/Category.model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var cat = category.getList();

  res.render('index', { title: 'Express', cat : cat });
});

module.exports = router;
