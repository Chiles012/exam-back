const Videogame = require('../models/videogames.models');
const asyncHandler = require('../middlewares/async');
const Videogames = require('../models/videogames.models');

exports.getVideogames = asyncHandler( async ( req, res, next ) => {
    const videogames = await Videogames.getVideogames();

    res
        .status(200)
        .json({videogames});
})

exports.createVideogames = asyncHandler( async (req ,res , next) => {
    const { name, launchdate, category, price} = req.body
    const videogames = await Videogames.createVideogames();
})

exports.updateVideogames = asyncHandler( async ( req, res, next ) => {
    const { name, launchdate, category, price, id} = req.body
    const videogames = await videogames.updateVideogames(id, name, launchdate, category, price);

    res
        .status(200)
        .json({videogames})
})

exports.deleteVideogames = async( async (req, res, next) => {
    
})


