const express = require('express');
const router = express.Router();
const controller = require('../controllers/analytics');
const upload = require('../middleweare/upload');
const passport = require('passport');


//localhost:5000/api/analytics/overvew
router.post('/overvew', upload.single('image'), controller.overvew);
//localhost:5000/api/analytics/analytics
router.get('/analytics', passport.authenticate('jwt', { session: false }), controller.analytics,);

module.exports = router;