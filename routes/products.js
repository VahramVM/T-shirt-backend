const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/products');
const upload = require('../middleweare/upload')


//localhost:5000/api/product
router.get('/', controller.getAll)
// router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
// router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
// router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)

module.exports = router;