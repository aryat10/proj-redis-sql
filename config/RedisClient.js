const { createClient } = require('redis');

const client = createClient({
  url: 'redis://default:LO22FEUcZiHo5RGfELIC0rAovyGot5cw@redis-16796.c301.ap-south-1-1.ec2.redns.redis-cloud.com:16796'
});

client.on('error', (err) => console.error('Redis Error', err));

const connectRedis = async () => {
  await client.connect();
  console.log("🔌 Redis connected");
};

module.exports = { client, connectRedis };
