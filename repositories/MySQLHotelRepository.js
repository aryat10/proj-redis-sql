const BaseRepository = require('./BaseRepository');
const db = require('../db/mysql');

class MySQLHotelRepository extends BaseRepository {
  async create(hotel) {
    const [result] = await db.query(
      'INSERT INTO hotels (name, occupancy) VALUES (?, ?)',
      [hotel.name, hotel.occupancy]
    );
    return { id: result.insertId, ...hotel };
  }

  async delete(id) {
    await db.query('DELETE FROM hotels WHERE id = ?', [id]);
    return { status: 'deleted', id };
  }

  async find(occupancy) {
    const [rows] = await db.query(
      'SELECT * FROM hotels WHERE occupancy = ?',
      [occupancy]
    );
    return rows;
  }
}

module.exports = new MySQLHotelRepository();
