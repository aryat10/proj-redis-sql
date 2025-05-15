const RedisFactory = require('../config/RedisFactory');
const RedisHotelRepository = require('../repositories/RedisHotelRepository');

let repo;

(async () => {
  const redisClient = await RedisFactory.getInstance();
  repo = new RedisHotelRepository(redisClient);  // ✅ DI
})();

exports.createHotel = async (req, res) => {
  const result = await repo.create(req.body);
  res.status(201).json(result);
};

exports.getHotel = async (req, res) => {
  const result = await repo.find(req.params.id);
  res.json(result);
};

exports.deleteHotel = async (req, res) => {
  const result = await repo.delete(req.params.id);
  res.json(result);
};
