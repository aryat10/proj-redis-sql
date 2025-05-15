const express = require('express');
const dotenv = require('dotenv');
const hotelRoutes = require('./routes/hotelRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/', hotelRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
