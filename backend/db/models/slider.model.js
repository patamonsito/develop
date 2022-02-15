const { Model, DataTypes, Sequelize } = require('sequelize');

const SLIDER_TABLE = 'sliders';

const SliderSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Img_url: {
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

class Slider extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SLIDER_TABLE,
      modelName: 'Slider',
      timestamps: false
    }
  }
}


module.exports = { SLIDER_TABLE, SliderSchema, Slider }
