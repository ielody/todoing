const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function create(db) {
  console.log('Add an item to your list')

  let task = process.argv[3]

  if (!task) {
    farge.log('Enter task:')
    task = await input()
  }

  if (task) {
    const todo = await db('todo').create({ task })
    farge.italic.log(todo.task + ' added')

  } else {
    farge.red.log('Task not added. You need to enter at least 1 character.')
  }
}

