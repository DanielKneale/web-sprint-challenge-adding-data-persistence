// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create
  };

  function get() {
      return db('resources');
  }

  function getById(id) {
      return db('resources')
        .where({id})
        .first();
  }

  async function create(resource) {
      const [id] = await db('resources').insert(resource)
      return getById(id)
  }