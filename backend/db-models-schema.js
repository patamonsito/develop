const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model')

const CUSTOMER_TABLE = 'customers';

const CustomerSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true, // autoincrementable
    primaryKey: true, // llave primaria
    type: DataTypes.STRING // Tipo de dato string
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW, // guarda la fecha de creacion
  },
  updatedAt: {
      allowNull: false,
      field: 'updated_at',
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
  },

  //Unir 1 a 1
  userId: { // nombre de la variable
    field: 'user_id', // Se llamara la tabla distinto a la variable
    allowNull: false, // no puede ser nulo
    type: DataTypes.INTEGER, //data tipo Numerico entero
    unique: true, // No se puede repetir
    references: { // se crea la referencia apuntando a la tabla asociada
      model: USER_TABLE, // nombre de la tabla como variable debe importarse arriba
      key: 'id' // nombre de la columna
    },
    onUpdate: 'CASCADE', // en caso de actualizarse
    onDelete: 'SET NULL' // en caso de eliminarse
  }
}

class Customer extends Model {

  //asociacion de uno a uno
  static associate(models) { 
    this.belongsTo(models.User, {as: 'user'});  // funcion que permite hacer la union de 1 a 1 o 1 a muchos
  },

  // Asociacion del principal a uno
  static associate(models) {
    this.hasOne(models.Customer, { // tiene uno
      as: 'customer', // nombre de como se llamara al llamarla
      foreignKey: 'userId' //llave foranea utilizada
    });
  },

  //asociacion de principal a muchos
  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    });
  }


  static config(sequelize) {
    return {
      sequelize, // libreria que estamos usando
      tableName: CUSTOMER_TABLE, // nombre de la tabla
      modelName: 'Customer', // nombre del modelo
      timestamps: false // para q no requera create y actualice por default
    }
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };