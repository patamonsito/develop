const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const REFERRAL_TABLE = 'referrals';

const ReferralSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_referido_id: {
    field: 'User_referido_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_referido_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Primera_compra: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Token_cupon: {
    allowNull: false,
    type: DataTypes.STRING,
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


class Referral extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'Usuarios' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REFERRAL_TABLE,
      modelName: 'Referral',
      timestamps: false
    }
  }
}

module.exports = { Referral, ReferralSchema, REFERRAL_TABLE };
