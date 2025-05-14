// const repo = require('../repositories/MySQLHotelRepository');
const repo = require('../repositories/RedisHotelRepository');

exports.createHotel = async (req, res) => {
  try {
    const result = await repo.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const result = await repo.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHotel = async (req, res) => {
  try {
    const result = await repo.find(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
