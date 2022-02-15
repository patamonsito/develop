const Joi = require('joi');

const Id = Joi.number().integer();
const Correo = Joi.string().email();
const Contraseña = Joi.string().min(8);
const Estado = Joi.boolean();
const Token = Joi.string();
const Nombre = Joi.string().min(2).max(45);
const Apellido = Joi.string().min(2).max(45);
const Rut = Joi.string().min(8).max(11);
const Telefono = Joi.string().min(9).max(12);
const Avatar = Joi.string();
const Descuento = Joi.number().integer().max(2);
const Token_recuperacion = Joi.string();
const Token_vencimiento = Joi.string();
const Confirmacion_correo = Joi.boolean()
const Suscripcion = Joi.boolean();
const Rol = Joi.string();
const Compras = Joi.number().integer();
const Cod_referido = Joi.string();
const User_referido_id = Joi.number().integer();
const User_favoritos_id = Joi.number().integer();
const User_order_id = Joi.number().integer();
const User_cupones_id = Joi.number().integer();
const User_autos_id = Joi.number().integer();
const User_ticket_id = Joi.number().integer();
const User_direcciones_id = Joi.number().integer();

const createUserSchema = Joi.object({
    Correo: Correo.required(),
    Contraseña: Contraseña.required(),
    Apellido: Apellido.required(),
    Rut: Rut.required(),
    Nombre: Nombre.required(),
    Telefono: Telefono.required(),
    Estado: Estado,
    Token: Token,
    Avatar: Avatar,
    Descuento: Descuento,
    Token_recuperacion: Token_recuperacion,
    Token_vencimiento: Token_vencimiento,
    Confirmacion_correo: Confirmacion_correo,
    Suscripcion: Suscripcion,
    Rol: Rol,
    Compras: Compras,
    Cod_referido: Cod_referido,
    User_referido_id: User_referido_id,
    User_favoritos_id: User_favoritos_id,
    User_order_id: User_order_id,
    User_cupones_id: User_cupones_id,
    User_autos_id: User_autos_id,
    User_ticket_id: User_ticket_id,
    User_direcciones_id: User_direcciones_id
});

const updateUserSchema = Joi.object({
    Correo: Correo,
    Contraseña: Contraseña,
    Apellido: Apellido,
    Rut: Rut,
    Nombre: Nombre,
    Telefono: Telefono,
    Estado: Estado,
    Token: Token,
    Avatar: Avatar,
    Descuento: Descuento,
    Token_recuperacion: Token_recuperacion,
    Token_vencimiento: Token_vencimiento,
    Confirmacion_correo: Confirmacion_correo,
    Suscripcion: Suscripcion,
    Rol: Rol,
    Compras: Compras,
    Cod_referido: Cod_referido,
    User_referido_id: User_referido_id,
    User_favoritos_id: User_favoritos_id,
    User_order_id: User_order_id,
    User_cupones_id: User_cupones_id,
    User_autos_id: User_autos_id,
    User_ticket_id: User_ticket_id,
    User_direcciones_id: User_direcciones_id
});

const getUserSchema = Joi.object({
    Id: Id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
