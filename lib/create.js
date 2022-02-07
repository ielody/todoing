const { input } = require("extras")
const farge = require('farge')({
  newline: true
})

module.exports = async function create(db) {
  console.log('Add an item to your list')
  const task = process.argv[2]
  if (!task) {
    console.log(farge.red.log('Task not found, try again'))
  }

  else {
    let task = process.argv[3]

  if(!task) {
    task = await input()
  }
    const todo = await db('todo').create({ task })
    console.log(todo.task + ' added')
  }
}