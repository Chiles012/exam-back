const db = require('../../db');

class User {
    static async getUSers() {
        return db.getData('/users');
    }

    static async createUser(name, lastName, email) {
        return db.push('/users', { ['123']: {name, lastName, email} }, false);
    }

    static async updateUser(id, name, lastName, email) {
        return db.push(`/users/${id}`, { name, lastName, email }, true);
    }

    static async deleteUser(id) {
        return db.delete(`/users/${id}`);
    }

    // * En el registro de usuario encriptar la contraseña y crear un id dinamico
    // * Crear un endpoint para el login validando la contraseña y verificando si la contraseña exista
    // * tanto en el registro como en el login devolver un token de verificacion
    // * Crear un middleware de verificacion de usuario para accesos
    // * Agregar rol de usuarios para el middleware y que lo tenga el token
}

module.exports = User;
