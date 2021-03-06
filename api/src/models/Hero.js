const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('hero', {
		hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		attack: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		marvelApiId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	});
};
