const express = require('express');
const dotenv = require('dotenv');
const hotelRoutes = require('./routes/hotelRoutes');
const { connectRedis } = require('./config/RedisFactory');
connectRedis();


dotenv.config();
const app = express();
app.use(express.json());

app.use('/', hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
