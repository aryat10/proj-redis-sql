require("dotenv").config();
const mysql = require("mysql2/promise");

(async () => {
  try {
    const pool = await mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    await pool.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        occupancy INT
      );
    `);

    await pool.query(`
      INSERT INTO hotels (name, occupancy)
      VALUES 
        ('Hotel A', 2),
        ('Hotel B', 3),
        ('Hotel C', 2);
    `);

    console.log("✅ Database initialized successfully");
    pool.end();
  } catch (err) {
    console.error("❌ DB init error:", err);
  }
})();
