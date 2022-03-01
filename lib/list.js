const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {
  let todos = await db('todo').find()

  if (!todos.length) {
    console.log("You don't have any tasks")
    return
  }

  let range = +process.argv[3]
  console.log('Your tasks')

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