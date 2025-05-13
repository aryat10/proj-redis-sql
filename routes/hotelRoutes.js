const express = require("express");
const router = express.Router();
const pool = require("../db/mysqlClient");

router.post("/searchByRoomOccupancy", async (req, res) => {
  const { occupancy } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM hotels WHERE occupancy = ?",
      [occupancy]
    );
    res.json({ result: { hotels: rows, totalcount: rows.length } });
  } catch (error) {
    console.error("MySQL Query Error:", error);
    res.status(500).json({ error: "Failed to search hotels" });
  }
  
});

console.log('Routes working fine 🔥')

module.exports = router;
