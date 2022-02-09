const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {
  farge.italic.log('Your tasks')
  const todos = await db('todo').find()

  todos.forEach((todo, i) => {
    (farge.blue.log(`${i + 1}: ${todo.task}`))
  })
}