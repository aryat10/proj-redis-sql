const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({ url: process.env.REDIS_URL });

client.connect()
  .then(() => console.log('✅ Connected to Redis'))                     // This is donne taaki connection establish ho sake redis se...
  .catch(err => console.error('❌ Redis error:', err));

module.exports = client;
