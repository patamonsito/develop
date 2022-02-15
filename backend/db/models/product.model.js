const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Codigo_importadora: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  Importadora: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Codigo_producto: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  Producto: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Descripcion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Origen: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Categoria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Familia: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Marca: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Marca_vehiculo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Modelo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Año_i: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Año_t: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  Stock: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  Oferta: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Descuento: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  Vendidos: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  Producto_favorito_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Producto_img_id: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
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

class Product extends Model {
  static associate(models) {
    this.hasMany(models.Order, {
      as: 'Orders',
      foreignKey: 'Codigo_producto'
    });

    this.hasMany(models.Product_img, {
        as: 'Imgs',
        foreignKey: 'Producto_img_id'
    });

    this.hasMany(models.Model_car, {
        as: 'Modelos',
        foreignKey: 'Codigo_importadora'
    });

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}


module.exports = { PRODUCT_TABLE, ProductSchema, Product }
