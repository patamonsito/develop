const { Model, DataTypes, Sequelize } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');

const MODEL_CAR_TABLE = 'model_cars';

const Model_carSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Codigo_importadora: {
    field: 'Codigo_importadora',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'Codigo_importadora'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Auto_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  },
  Modelo: {
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


class Model_car extends Model {

  static associate(models) {
    this.belongsTo(models.Product, {
      as: 'Productos',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MODEL_CAR_TABLE,
      modelName: 'Model_car',
      timestamps: false
    }
  }
}

module.exports = { Model_car, Model_carSchema, MODEL_CAR_TABLE };
