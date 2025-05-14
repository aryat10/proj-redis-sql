const express = require('express');
const { createHotel, getHotel } = require('../controllers/hotelController');

const router = express.Router();

router.post('/hotel', createHotel);   // POST route
router.get('/hotel/:id', getHotel);   // GET route

module.exports = router;
