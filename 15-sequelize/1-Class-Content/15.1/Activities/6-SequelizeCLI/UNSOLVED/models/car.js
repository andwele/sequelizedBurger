module.exports = function (sequelize, DataTypes) {
	var Car = sequelize.define('Car', {
		miles: DataTypes.Integer
	});

	return Car;
}