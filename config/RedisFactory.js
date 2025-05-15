const { client, connectRedis } = require('./RedisClient');

let instance = null;

const RedisFactory = {
  getInstance: async () => {
    if (!instance) {
      await connectRedis();   // connect only once
      instance = client;
    }
    return instance;
  }
};

module.exports = RedisFactory;
