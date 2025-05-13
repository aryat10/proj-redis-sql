const db = require('../db/mysql');
const redis = require('../db/redisClient');

exports.searchByRoomOccupancy = async (req, res) => {
  const { occupancy } = req.body;                           // yahan pr jo bhi room occupancy ka request hoga woh store hoga by Postman

  if (!occupancy) {
    return res.status(400).json({ error: 'occupancy is required' });         // agar koi error rha toh wapis kar dega to client
  }

  const cacheKey = `hotels:occupancy:${occupancy}`;             // cacheKey se yeh fayda hai ki reQuery baar baar nhi karna padega.. ek baar sql se request seedha redis mei store ho jayga..

  try {
    
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      console.log('🔁 Returning from cache');
      return res.json(JSON.parse(cachedData));             // received cacheKey ko send kar denge
    }

    
    const [rows] = await db.query(
      'SELECT * FROM hotels WHERE occupancy_limit >= ?',
      [occupancy]                                              // store karne ke liye 
    );

    
    await redis.set(cacheKey, JSON.stringify(rows), { EX: 60 }); // 1 min cache

    console.log('📦 Returning from DB');
    res.json(rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Server error' });                  // yahan pr server issue agar hoga toh.. woh show ho jayga
  }
};
