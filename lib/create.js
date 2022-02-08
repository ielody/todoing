const { input } = require("extras")
const farge = require("farge")({
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

  if(task.length > 1) {
    const todo = await db('todo').create({ task })
    console.log(todo.task + ' added')
  }
  else {
    console.log(farge.red.log('You need to enter at least 2 characters.'))
  }
}
}