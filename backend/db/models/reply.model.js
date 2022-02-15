const { Model, DataTypes, Sequelize } = require('sequelize');
const { REASON_TABLE } = require('./reason.model');

const REPLY_TABLE = 'replies';

const ReplySchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Respuestas_id: {
    field: 'Respuestas_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REASON_TABLE,
      key: 'Id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Titulo: {
    allowNull: false,
    type: DataTypes.STRING
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


class Reply extends Model {

  static associate(models) {
    this.belongsTo(models.Reason, { as: 'Motivo' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: REPLY_TABLE,
      modelName: 'Reply',
      timestamps: false
    }
  }
}

module.exports = { Reply, ReplySchema, REPLY_TABLE };
