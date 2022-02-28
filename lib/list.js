const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {

  let range = +process.argv[3]

  console.log('Your tasks')
  let todos = await db('todo').find()

  if (range) {
    if (range < 0) {
      todos = todos.slice(range)
    } else {
      todos = todos.slice(0, range)
    }
  }

  todos.forEach((todo, i) => {
    const output = `${i + 1}: ${todo.task || '?'}`
    farge[todo.done ? 'dim' : 'blue'].log(output)
  })

}