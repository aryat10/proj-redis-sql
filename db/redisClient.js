const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect()
  .then(() => console.log('✅ Connected to Redis'))
  .catch(err => console.error('❌ Redis error:', err));

module.exports = client;
