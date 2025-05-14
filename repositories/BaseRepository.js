class BaseRepository {                               // This is basicallly use.. as a part of a class inheritence, yahan jo methods banenge wohi  methods honge... 
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
  
  // Yeh ek base class hai jisme CRUD operations (create, delete, find) ke liye placeholder methods hain. Har derived class (jaise MySQLHotelRepository ya RedisHotelRepository) ko in methods ko implement karna padta hai.

                                                