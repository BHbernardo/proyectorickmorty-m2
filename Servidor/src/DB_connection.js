require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

 //URL
const sequelize = new Sequelize(`postgres:${DB_USER}:${DB_PASSWORD}
@${DB_HOST}/rickandmorty`,
   
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize); // esto sirve para cuando levantemos el servidor se guarden nuestros modelos;
UserModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!

const { User, Favorite } = sequelize.models; // trae los modelos;
User.belongsToMany(Favorite, { through: "user_favorite" }); // relacion muchos a muchos;
Favorite.belongsToMany(User, { through: "user_favorite" });
// 'belongsToMany' => puede tener muchos!
// 'through' => se van a relacionar atravez de una TABLA INTERMEDIA!;
// buena practica poner el '_' para identificarla;

module.exports = {
    User,
    Favorite,
    conn: sequelize, // exporta la instancia para sincronizar;
};
