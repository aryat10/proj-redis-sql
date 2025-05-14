const { createClient } = require('redis');

// Redis Client create karna
const redisClient = createClient({
  url: 'redis://default:LO22FEUcZiHo5RGfELIC0rAovyGot5cw@redis-16796.c301.ap-south-1-1.ec2.redns.redis-cloud.com:16796'
});

// Redis Client error handling
redisClient.on('error', (err) => console.error('Redis Client Error', err));

// Redis Connection function
const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("🔌 Connected to Redis Cloud");
  } catch (err) {
    console.error("Redis Connection Failed:", err);
  }
};

// Adding getClient method to get redisClient
const getClient = () => redisClient;

module.exports = { redisClient, connectRedis, getClient };
