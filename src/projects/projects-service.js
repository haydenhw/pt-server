const ProjectsService = {
  getAllProjects(knex) {
    return knex.select('*').from('projects')
  },
  insertProject(knex, newProject) {
    return knex
      .insert(newProject)
      .into('projects')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, id) {
    return knex.from('projects').select('*').where('id', id).first()
  },
  deleteProject(knex, id) {
    return knex('projects')
      .where({ id })
      .delete()
  },
  updateProject(knex, id, newProjectFields) {
    return knex('projects')
      .where({ id })
      .update(newProjectFields)
  },
}

module.exports = ProjectsService
