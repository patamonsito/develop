const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Correo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  Contraseña: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Token: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  Nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Rut: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  Telefono: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  Avatar: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: '/avatar/default-avatar.jpg'
  },
  Descuento: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  Token_recuperacion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  Token_vencimiento: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  Confirmacion_correo: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Suscripcion: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Rol: {
    allowNull: false,
    type: DataTypes.STRING
  },
  Compras: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  Cod_referido: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  User_referido_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_favoritos_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_order_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_cupones_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_autos_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_ticket_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  User_direcciones_id: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
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

class User extends Model {
  static associate(models) {
    this.hasMany(models.Referral, {
      as: 'Referidos',
      foreignKey: 'Id_referido'
    });
    this.hasMany(models.Coupon, {
      as: 'Cupones',
      foreignKey: 'CuponesId'
    });
    this.hasMany(models.Address, {
      as: 'Direcciones',
      foreignKey: 'User_direcciones_id'
    });
    
    this.belongsToMany(models.Product, {
      as: 'Favoritos',
      through: models.Favorite,
      foreignKey: 'User_favoritos_id',
      otherKey: 'Producto_favorito_id'
    });

    this.belongsToMany(models.Product, {
      as: 'Orders',
      through: models.Order,
      foreignKey: 'User_order_id',
      otherKey: 'Codigo_producto'
    });

    this.belongsToMany(models.Model_car, {
      as: 'Autos',
      through: models.Car,
      foreignKey: 'User_autos_id',
      otherKey: 'Auto_id'
    });

    this.belongsToMany(models.Ticket_img, {
      as: 'Tickets',
      through: models.Ticket,
      foreignKey: 'User_ticket_id',
      otherKey: 'Ticket_img_id'
    });



  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
