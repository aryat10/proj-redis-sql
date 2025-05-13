const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); // to parse JSON request body

app.post("/api/searchByRoomOccupancy", (req, res) => {
  const occupancy = req.body.occupancy;
  console.log("Received occupancy:", occupancy);
  res.send("Request received");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
