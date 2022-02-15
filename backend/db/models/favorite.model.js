const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { PRODUCT_TABLE } = require('./product.model');

const FAVORITE_TABLE = 'referrals';

const FavoriteSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_favoritos_id: {
    field: 'User_favoritos_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_favoritos_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Producto_favorito_id: {
    field: 'Producto_favorito_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'Producto_favorito_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  }
}


class Favorite extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'Favoritos' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FAVORITE_TABLE,
      modelName: 'Favorite',
      timestamps: false
    }
  }
}

module.exports = { Favorite, FavoriteSchema, FAVORITE_TABLE };
