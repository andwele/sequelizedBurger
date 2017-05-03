module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		email: DataTypes.String,
		password: DataTypes.String
	});

	return User;
}