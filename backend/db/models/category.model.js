const { Model, DataTypes, Sequelize } = require('sequelize');
const { FAMILY_TABLE } = require('./family.model');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  Id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  Familia_id: {
    field: 'Familia_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FAMILY_TABLE,
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


class Category extends Model {

  static associate(models) {
    this.belongsTo(models.Family, {
      as: 'Categoria',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = { Category, CategorySchema, CATEGORY_TABLE };
