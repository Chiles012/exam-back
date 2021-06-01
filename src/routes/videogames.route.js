const router = require('express').Router();
const {
    getVideogames,
    getVideogamesByDate,
    getVideogamesByPrice,
    addVideogame, 
    updateVideogame,
    deleteVideogame
} = require('../controllers/videogames.controller');

router.post('/', addVideogame)
      .get('/', getVideogames)
      .get('/videogamesByDate', getVideogamesByDate)
      .get('/videogamesByPrice', getVideogamesByPrice)
      .put('/', updateVideogame)
      .delete('/:id', deleteVideogame);


module.exports = router;
