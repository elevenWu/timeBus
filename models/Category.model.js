var config = [
	{name: "栏目1", id: 1},
	{name: "栏目2", id: 2}
];

Category = {
	getList : function(res, result, callback){
		return config;
	},
}

module.exports = Category;