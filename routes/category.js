const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/category');
const upload = require('../middleweare/upload')

//localhost:5000/api/category
router.get('/', controller.getByName)
router.get('/:id',  controller.getAll)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)

module.exports = router;

