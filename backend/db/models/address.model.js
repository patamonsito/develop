const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const ADDRESS_TABLE = 'adrresses';

const AddressSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_direcciones_id: {
    field: 'User_direcciones_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_direcciones_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Direccion: {
    allowNull: false,
    type: DataTypes.STRING
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


class Address extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'Direcciones' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: 'Address',
      timestamps: false
    }
  }
}

module.exports = { Address, AddressSchema, ADDRESS_TABLE };
