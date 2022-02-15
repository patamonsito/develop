const { Model, DataTypes, Sequelize } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');

const PRODUCT_IMG_TABLE = 'product_imgs';

const Product_imgSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Producto_img_id: {
    field: 'Producto_img_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'Producto_img_id'
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


class Product_img extends Model {


  static associate(models) {
    this.belongsTo(models.Product, {
      as: 'Productos_img',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_IMG_TABLE,
      modelName: 'Product_img',
      timestamps: false
    }
  }
}

module.exports = { Product_img, Product_imgSchema, PRODUCT_IMG_TABLE };
