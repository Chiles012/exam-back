const Videogame = require('../models/videogames.models');
const asyncHandler = require('../middlewares/async');

exports.getVideogames = asyncHandler( async ( req, res, next ) => {
    const videogame = await Videogame.getVideogames();

    res
        .status(200)
        .json({videogame});
})

exports.getVideogamesByDate = asyncHandler( async ( req, res, next ) => {
    const videogame = await Videogame.getVideogamesByDate();

    res
        .status(200)
        .json({videogame});
})

exports.getVideogamesByPrice = asyncHandler( async ( req, res, next ) => {
    const videogame = await Videogame.getVideogamesByPrice();

    res
        .status(200)
        .json({videogame});
})

exports.addVideogame = asyncHandler( async ( req, res, next ) => {
    const { name, date, cat, price } = req.body
    const videogame = await Videogame.addVideogame(name, date, cat, price);

    res
        .status(200)
        .json({videogame})
})

exports.updateVideogame = asyncHandler( async ( req, res, next ) => {
    const { id, name, date, cat, price } = req.body
    const videogame= await Videogame.updateVideogame(id, name, date, cat, price);

    res
        .status(200)
        .json({videogame})
})

exports.deleteVideogame = asyncHandler( async (req, res, next) => {
    const { id } = req.params.id
    const videogame = await Videogame.deleteVideogame(id)

    res
        .status(200)
        .json({videogame})
})


