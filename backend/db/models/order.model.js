const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  User_order_id: {
    field: 'User_order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'User_order_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Codigo_producto: {
    field: 'Codigo_producto',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'Codigo_producto'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  Cupon_Descuento: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  Cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  Estado: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Por atender'
  },
  Metodo_pago: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Seguimiento: {
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


class Order extends Model {

  static associate(models) {
    this.belongsTo(models.Product, { as: 'Productos' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { Order, OrderSchema, ORDER_TABLE };
