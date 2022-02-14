const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {

  let numbers = process.argv[3]

  if (!numbers) {
    farge.italic.log('Your tasks')
    const todos = await db('todo').find()

    todos.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }

    //showing first task on the list
  if (numbers === '1') {
    const todos = await db('todo').find({}, { limit: 1})

    todos.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }

  //showing first three tasks on the list
  if (numbers === '3') {
    const todos = await db('todo').find({}, { limit: 3})

    todos.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }

  //show first five tasks on the list
  if (numbers === '5') {
    const todos = await db('todo').find({}, { limit: 5})

    todos.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }
}