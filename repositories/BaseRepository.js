class BaseRepository {
  async create(data) {
    throw new Error('Method not implemented');
  }
  async delete(id) {
    throw new Error('Method not implemented');
  }
  async find(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = BaseRepository;
