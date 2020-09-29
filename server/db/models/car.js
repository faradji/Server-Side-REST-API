'use strict';
module.exports = (sequelize, DataTypes) => {
	var Car = sequelize.define('Car', {
		name: DataTypes.STRING,
		model: DataTypes.STRING,
		color: DataTypes.STRING,
		year: DataTypes.INTEGER,
		category: DataTypes.STRING
	}, {
		timestamps: true,
		classMethods: {
			associate: function () { //(models)
				// associations can be defined here
			}
		}
	});
	return Car;
};