'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Catalog.init({
    userId: {
      type: DataTypes.INTEGER
    },
    catalogName: {
      field: 'catalog_name',
      type: DataTypes.STRING
    },  
    chats: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Catalog',
    tableName: 'catalogs',
    underscored: 'true'
  });
  return Catalog;
};