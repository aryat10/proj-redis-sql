const express = require('express');
const { createHotel, getHotel, deleteHotel } = require('../controllers/hotelController');
const router = express.Router();

router.post('/hotel', createHotel);
router.get('/hotel/:id', getHotel);
router.delete('/hotel/:id', deleteHotel);

module.exports = router;
