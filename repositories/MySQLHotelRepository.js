const BaseRepository = require('./BaseRepository');
const db = require('../db/mysql');

class MySQLHotelRepository extends BaseRepository {
  async create(hotel) {
    const [result] = await db.query(
      'INSERT INTO hotels (name, occupancy) VALUES (?, ?)',  // Yeh SQL logic rhega create() karne ke liye 
      [hotel.name, hotel.occupancy]
    );
    return { id: result.insertId, ...hotel };
  }

  async delete(id) {
    await db.query('DELETE FROM hotels WHERE id = ?', [id]);   // Yeh SQL logic rhega delete() karne ke liye 
    return { status: 'deleted', id }; 
  }

  async find(occupancy) {
    const [rows] = await db.query(
      'SELECT * FROM hotels WHERE occupancy = ?',                         // Yeh SQL logic rhega find() karne ke liye 
      [occupancy]
    );
    return rows;
  }
}
 
module.exports = new MySQLHotelRepository();                             // This class will inherit BaseRepository.js part... aur usme defined methods ko implement kar rahi hai. Yeh methods MySQL ke specific data operations ko handle karenge.
