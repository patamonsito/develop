const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const COUPON_TABLE = 'coupons';

const CouponSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  CuponesId: {
    field: 'User_cupones_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_cupones_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Codigo_cupon: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Aplicacion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Vencimiento: {
    allowNull: false,
    type: DataTypes.DATE
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


class Coupon extends Model {

  static associate(models) {
    this.belongsTo(models.User, { as: 'Cupones' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COUPON_TABLE,
      modelName: 'Coupon',
      timestamps: false
    }
  }
}

module.exports = { Coupon, CouponSchema, COUPON_TABLE };
