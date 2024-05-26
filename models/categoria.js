'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    static associate(models) {
      categoria.belongsToMany(models.pelicula, {through: 'categoriapelicula', foreignKey: 'categoriaId'});
    }
  }
  categoria.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    protegida:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'categoria',
  });
  return categoria;
};
