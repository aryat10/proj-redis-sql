const BaseRepository = require('./BaseRepository');
const redis = require('../config/RedisFactory').getClient();

class RedisHotelRepository extends BaseRepository {
  
  async create(hotel) {
    const key = `hotel:${hotel.id}`;  
    await redis.set(key, JSON.stringify(hotel));
    return { status: 'saved', key };                            // Hotel data ko Redis mein store karta hai. Redis mein key "hotel:<hotel_name>" set ki jati hai.
  }

  
  async delete(id) {
    const key = `hotel:${id}`;  
    await redis.del(key);                                 // Hotel data ko Redis se delete karta hai using DEL command.
    return { status: 'deleted', key };
  }

  
  async find(id) {
    const key = `hotel:${id}`;  
    const data = await redis.get(key);                  // Redis mein se hotel data fetch karta hai, agar milta hai toh return karta hai, nahi milta toh
    return data ? JSON.parse(data) : null;
  }
}

module.exports = new RedisHotelRepository();
