const db = require('../../db');
const bcrypt = require('bcryptjs');
const token = require('jsonwebtoken');

const id = "1245"
const lastName = 'Lopez'
const email = 'arturo@gmail.com'
const name = 'arturo'
const pass = '1234'
const rol = 'trabajador' 

class User {
    static async getUSers() {
        return db.getData('/users');
    }

    static async createUser(name, lastName, email, id, passwd, rol) {
        return db.push('/users', { [id]: {name, lastName, email,passwd,rol} }, true);
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
    

    static async passwd(){
        const {passwd} = this.getUSers()
        return passwd
    }
    
    static async bcrypt(passwd){

        return bcrypt.hash(passwd, 10)
    }

    static jsontoken(data, passwd, hash){

        if (bcrypt.compare(passwd, hash))
            const tk = token.sign(data, passwd)
        
        return tk
    }
    
    //middleware



}

User.getUSers(id,lastName, email, name, pass,rol)
User.bcrypt(this.passwd)



module.exports = User;
