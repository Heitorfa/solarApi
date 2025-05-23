const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/measurementController');

router.post('/measurements', ctrl.create);
router.get('/measurements', ctrl.list);

module.exports = router;