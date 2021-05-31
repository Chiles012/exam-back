const db = require('../../db');

class User {
    static async getUSers() {
        return db.getData('/users');
    }

    static async createUser(name, lastName, email) {
        return db.push('/users', { name, lastName, email }, false);
    }

    static async updateUser(id, name, lastName, email) {
        return db.push(`/users/${id}`, { name, lastName, email }, true);
    }

    static async 
}

module.exports = User;
