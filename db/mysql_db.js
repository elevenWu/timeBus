var mysql  = require('mysql');  

var config = {
	host  : '127.0.0.1',
	user  : 'root',
	password : 'root',
	database : 'timebus',
	port:'3306'
}

var pool = mysql.createPool( config );

var dbAction = {
	query : function(sql, callback) {
    	pool.getConnection(function (err, connection) {
	        connection.query(sql, function (err, rows) {
	            callback(err, rows);
	            //释放链接
	            connection.release();
	        });
	    });
	}
}


module.exports = dbAction;