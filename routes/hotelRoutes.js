const express = require("express");
const router = express.Router();
const pool = require("../db/mysqlClient");

router.post("/searchByRoomOccupancy", async (req, res) => {
  const { occupancy } = req.body;
  try {
    const [rows] = await pool.query(            // yeh pool wala part sql se receive hoga jaisa bhi table databse mei hai aur  yehan pr jo bhi room occupancy ki request aaygi by /searchByRoomOccupancy uska wala request store ho jayga.. 
      "SELECT * FROM hotels WHERE occupancy = ?",
      [occupancy]
    );
    res.json({ result: { hotels: rows, totalcount: rows.length } });
  } catch (error) {
    console.error("MySQL Query Error:", error);
    res.status(500).json({ error: "Failed to search hotels" });             // agar koi server issue aata hai toh yahan pr show ho jayga... 
  }
  
});

console.log('Routes working fine 🔥')

module.exports = router;
