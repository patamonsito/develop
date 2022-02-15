const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const TICKET_TABLE = 'tickets';

const TicketSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_ticket_id: {
    field: 'User_ticket_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_ticket_id'
    }
  },
  Ticket_img_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
  },
  Motivo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Tema: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Descripcion: {
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


class Ticket extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'Usuario' });
    this.hasMany(models.Ticket_img, {
      as: 'Ticket_imgs',
      foreignKey: 'Ticket_img_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TICKET_TABLE,
      modelName: 'Ticket',
      timestamps: false
    }
  }
}

module.exports = { Ticket, TicketSchema, TICKET_TABLE };
