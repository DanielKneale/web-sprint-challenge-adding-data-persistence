// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    create
  };

  function get() {
      return db('projects')
  }

  function getById(project_id) {
      return db('projects')
        .where({project_id})
        .first();
  }

  async function create(pro) {
      const [project_id] = await db('projects').insert(pro)
      return getById(project_id)
  }