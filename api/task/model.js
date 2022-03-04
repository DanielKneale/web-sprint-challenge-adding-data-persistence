// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create
  };

  function get() {
      return db('tasks');
  }

  function getById(id) {
      return db('tasks')
        .where({id})
        .first();
  }

  async function create(pro) {
      const [id] = await db('tasks').insert(pro)
      return getById(id)
  }