const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { MODEL_CAR_TABLE } = require('./model_car.model');

const CAR_TABLE = 'cars';

const CarSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_autos_id: {
    field: 'User_autos_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_autos_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Auto_id: {
    field: 'Auto_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MODEL_CAR_TABLE,
      key: 'Auto_id'
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


class Car extends Model {

  static config(sequelize) {
    return {
      sequelize,
      tableName: CAR_TABLE,
      modelName: 'Car',
      timestamps: false
    }
  }
}

module.exports = { Car, CarSchema, CAR_TABLE };
