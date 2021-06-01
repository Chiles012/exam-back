const db = require('../../db');
const { v4 } = require('uuid');

class Videogames {
    // TODO: GET de todos los juegos
    static async getVideogames(){
        return db.getData('/videogames')
    }
    // TODO: POST un videojuego con los siguientes puntos: nombre, fecha de creacion, categoria y precio
    static async addVideogame(id = v4(), name, date, cat, price){
        return db.push('/videogames', {name, date, cat, price}, false);
    }
    // TODO: Get de los juegos mas recientes
    static async getVideogamesByDate(){
        var i;
        var videogames = db.getData('/videogames');
        for (const videogame in videogames) {
            var i =+ 1;
            if(videogame.date < videogames[i+1].date){
                videogames.push(videogame);
            }
          }
        return videogames;
    }
    // TODO: GET de los juegos mas caros
    static async getVideogamesByPrice(){
        var videogames = db.getData('/videogames');
        videogames.forEach((videogame, i) => {
            if(videogame.price > videogames[i+1].price){
                videogames.push(videogame);
            }
        });
        return videogames;
    }

    // TODO: PUT de un juego con id
    static async updateVideogame(id, name, date, cat, price){
        return db.push(`/videogame/${id}`, { id, name, date, cat, price}, true);
    }

    // TODO: DELETE
    static async deleteVideogame(id){
        return db.delete(`/videogame/${id}`);
    }
}

module.exports = Videogames;
