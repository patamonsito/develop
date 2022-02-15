const { Model, DataTypes, Sequelize } = require('sequelize');
const { REGION_TABLE } = require('./region.model');

const COMMUNE_TABLE = 'commune';

const CommuneSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Region_id: {
    field: 'Region_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REGION_TABLE,
      key: 'Id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Descripcion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN
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


class Commune extends Model {

  static associate(models) {
    this.belongsTo(models.Region, {
      as: 'Comuna',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMUNE_TABLE,
      modelName: 'Commune',
      timestamps: false
    }
  }
}

module.exports = { Commune, CommuneSchema, COMMUNE_TABLE };
