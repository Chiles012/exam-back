const User = require('../models/user.models');
const asyncHandler = require('../middlewares/async');

exports.getUsers = asyncHandler( async ( req, res, next ) => {
    const users = await User.getUSers();

    res
        .status(200)
        .json({users});
})

exports.createUser = asyncHandler( async ( req, res, next ) => {
    const { name, lastName, email } = req.body
    const user = await User.createUser(name, lastName, email);

    res
        .status(200)
        .json({user})
})

exports.updateUser = asyncHandler( async ( req, res, next ) => {
    const { name, lastName, email, id } = req.body
    const user = await User.updateUser(id, name, lastName, email);

    res
        .status(200)
        .json({user})
})
