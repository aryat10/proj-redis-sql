const BaseRepository = require('./BaseRepository');

class RedisHotelRepository extends BaseRepository {
  constructor(redisClient) {
    super();
    this.redis = redisClient;
  }

  async create(hotel) {
    const key = `hotel:${hotel.name}`;
    await this.redis.set(key, JSON.stringify(hotel));
    return { status: 'saved', key };
  }

  async delete(name) {
    const key = `hotel:${name}`;
    await this.redis.del(key);
    return { status: 'deleted', key };
  }

  async find(name) {
    const key = `hotel:${name}`;
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }
}

module.exports = RedisHotelRepository;
