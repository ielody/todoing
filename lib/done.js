const { input } = require('extras')
const c = require('ansi-colors')
const farge = require('farge')({
  newline: true
})

module.exports = async function done(db) {

  let numbers = process.argv[3]

  if (!numbers) {
    farge.log('Enter numbers to set as done:')
    numbers = await input()
  }

  if (!numbers) {
    farge.log('No numbers found')
    process.exit(0)
  }

  numbers = numbers.split(',').map(x => x.trim())

  const list = await db('todo').find()

  for(const number of numbers) {
    const index = parseInt(number) - 1
    const todo = list[index]

    todo.done = c.strikethrough(todo.task)

    if (todo.done) {
      await db('todo').update({id: todo.id}, {task: todo.done})
      farge.italic.log(`Marked ${todo.task} as done`)

    } else if (!todo) {
      farge.red.log('Task has already been marked as done.')

    } else {
      farge.red.log('Could not find task, try again.')
    }
  }
}
