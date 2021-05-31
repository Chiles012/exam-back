const router = require('express').Router();
const {
    getUsers,
    createUser,
    updateUser
} = require('../controllers/user.controller');

router.post('/', createUser)
      .get('/', getUsers)
      .put('/', updateUser);

module.exports = router;
