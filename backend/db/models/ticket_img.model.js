const { Model, DataTypes, Sequelize } = require('sequelize');
const { TICKET_TABLE } = require('./ticket.model');

const TICKET_IMG_TABLE = 'ticket_imgs';

const Ticket_imgSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Ticket_img_id: {
    field: 'Ticket_img_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TICKET_TABLE,
      key: 'Ticket_img_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Url: {
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


class Ticket_img extends Model {

  static associate(models) {
    this.belongsTo(models.Ticket, { as: 'Ticket' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TICKET_IMG_TABLE,
      modelName: 'Ticket_img',
      timestamps: false
    }
  }
}

module.exports = { Ticket_img, Ticket_imgSchema, TICKET_IMG_TABLE };
