// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create
  };

  function get() {
      return db('projects');
  }

  function getById(id) {
      return db('projects')
        .where({id})
        .first();
  }

  async function create(pro) {
      const [id] = await db('projects').insert(pro)
      return getById(id)
  }