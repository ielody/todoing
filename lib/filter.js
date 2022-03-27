const { input, regexp } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function filter(db) {
  const todos = await db('todo').find()

  if(!todos.length) {
    farge.log("You don't have any tasks.")
    return
  }

  let range = process.argv[3]
  farge.log("Type a word or number")
  range = await input()

  const regexp = new RegExp(range, 'i')
  const tasks = await db('todo').find({ task: regexp })

  if (range) {
    tasks.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }
}
