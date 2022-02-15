const { Model, DataTypes, Sequelize } = require('sequelize');

const FAMILY_TABLE = 'families';

const FamilySchema = {
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
  Img_url: {
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

class Family extends Model {
  static associate(models) {
    this.hasMany(models.Category, {
      as: 'Categorias',
      foreignKey: 'Familia_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FAMILY_TABLE,
      modelName: 'Family',
      timestamps: false
    }
  }
}


module.exports = { FAMILY_TABLE, FamilySchema, Family }
