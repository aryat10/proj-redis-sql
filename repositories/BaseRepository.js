class BaseRepository {
    create(item) {
      throw new Error('create() must be implemented');
    }
  
    delete(id) {
      throw new Error('delete() must be implemented');
    }
                                
    find(query) {
      throw new Error('find() must be implemented');
    }
  }             
  
  module.exports = BaseRepository;                    // iss file se yeh advantage ho jayga ki create,delete,find ka method bann jayga... jaisa bhi request aata hai.. 
  