const { Model, DataTypes, Sequelize } = require('sequelize');

const REGION_TABLE = 'regions';

const RegionSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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

class Region extends Model {
  static associate(models) {
    this.hasMany(models.Commune, {
      as: 'Comuna',
      foreignKey: 'Region_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGION_TABLE,
      modelName: 'Region',
      timestamps: false
    }
  }
}


module.exports = { REGION_TABLE, RegionSchema, Region }
