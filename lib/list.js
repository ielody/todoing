const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {
  console.log(farge.italic.log('Your tasks'))
  const todos = await db('todo').find()

  todos.forEach((todo, i) => {
    console.log((`${i + 1}: ${todo.task}`))
  })
}