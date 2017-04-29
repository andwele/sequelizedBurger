var orm = require("./config/orm.js");

console.log('Start Application')

orm.selectWhere("parties", "party_type", "grown-up", function (error, results) {
	console.log('This should be our data:', results);
});
