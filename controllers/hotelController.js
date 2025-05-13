const db = require('../db/mysql');
const redis = require('../db/redisClient');

exports.searchByRoomOccupancy = async (req, res) => {
  const { occupancy } = req.body;

  if (!occupancy) {
    return res.status(400).json({ error: 'occupancy is required' });
  }

  const cacheKey = `hotels:occupancy:${occupancy}`;

  try {
    // Check Redis
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      console.log('🔁 Returning from cache');
      return res.json(JSON.parse(cachedData));
    }

    // Query MySQL
    const [rows] = await db.query(
      'SELECT * FROM hotels WHERE occupancy_limit >= ?',
      [occupancy]
    );

    // Store in Redis
    await redis.set(cacheKey, JSON.stringify(rows), { EX: 60 }); // 1 min cache

    console.log('📦 Returning from DB');
    res.json(rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
