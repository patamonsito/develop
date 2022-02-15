const { Model, DataTypes, Sequelize } = require('sequelize');

const REASON_TABLE = 'reasons';

const ReasonSchema = {
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

class Reason extends Model {
  static associate(models) {
    this.hasMany(models.Reply, {
      as: 'Respuestas',
      foreignKey: 'Repuestos_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REASON_TABLE,
      modelName: 'Reason',
      timestamps: false
    }
  }
}


module.exports = { REASON_TABLE, ReasonSchema, Reason }
