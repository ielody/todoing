const { input } = require("extras")

module.exports = async function create(db) {
  console.log('Add an item to your list')
  const task = process.argv[2]
  if (!task) {
    console.log('Task not found, try again')
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