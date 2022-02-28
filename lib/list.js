const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function list(db) {

  let numbers = process.argv[3]

  console.log('Your tasks')
  const todos = await db('todo').find()

  todos.forEach((todo, i) => {
    const output = `${i + 1}: ${todo.task || '?'}`
    farge[todo.done ? 'dim' : 'blue'].log(output)
  })

}