var express = require('express');
var router = express.Router();
var db = require('../db/mysql_db');
var async = require('async');
var category =require('../models/Category.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var cat = category.getList();

  res.render('index', { cat: cat });
});


/*关于我们*/
router.get('/about', function(req, res, next) {

  var cat = category.getList();


  db.query("SELECT * FROM category", function(e, rs){
  	console.log(JSON.stringify(rs));
	res.locals.test = "this is test";

  	res.render('user/about', { title: 'Express', list: rs, cat : cat });

  })
  //res.render('user/about', { title: 'Express' });
});

router.get('/jsonList', function(req, res, next) {
	var result = {};
	var tasks = [
		function(callback){
			db.query("SELECT * FROM category", function(e, rs){
				console.log('category');
  				result.category = rs;
  				callback();

  			})
  			//callback(result);
		},
		function(callback){
			db.query("SELECT * FROM content", function(e, rs){
				console.log('content');
  				result.content = rs;
  				callback();
  			});
		}
	];

	async.waterfall(tasks, function(){
		console.log(result);
		res.send(JSON.stringify(result));
	})


  
});


module.exports = router;
