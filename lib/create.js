const { input } = require("extras")
const farge = require("farge")({
  newline: true
})

module.exports = async function create(db) {
  console.log('Add an item to your list')
  const task = process.argv[2]
    if (!task) {
      command = await input()
    }

    else {
      let task = process.argv[3]

    if(!task) {
      task = await input()
    }

    if(task.length > 1) {
      const todo = await db('todo').create({ task })
      farge.italic.log(todo.task + ' added')
    }

    else {
      farge.red.log('You need to enter at least 2 characters.')
    }
   }
  }