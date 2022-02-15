const { Model, DataTypes, Sequelize } = require('sequelize');

const MENU_TABLE = 'menus';

const MenuSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Rol: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  Descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  Estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  }
}

class Menu extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: MENU_TABLE,
      modelName: 'Menu',
      timestamps: false
    }
  }
}


module.exports = { MENU_TABLE, MenuSchema, Menu }
