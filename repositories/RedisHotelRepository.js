const BaseRepository = require('./BaseRepository');
const redis = require('../config/RedisFactory').getClient();

class RedisHotelRepository extends BaseRepository {
  // Create a hotel entry in Redis using hotel.id as the key
  async create(hotel) {
    const key = `hotel:${hotel.id}`;  // Use id instead of name
    await redis.set(key, JSON.stringify(hotel));
    return { status: 'saved', key };
  }

  // Delete a hotel entry from Redis using hotel.id as the key
  async delete(id) {
    const key = `hotel:${id}`;  // Use id instead of name
    await redis.del(key);
    return { status: 'deleted', key };
  }

  // Find a hotel by id from Redis
  async find(id) {
    const key = `hotel:${id}`;  // Use id instead of name
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  }
}

module.exports = new RedisHotelRepository();
