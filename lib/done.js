const { input } = require('extras')
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

  if (numbers === 'all') {
    const todo = await db('todo').find()
    const done = !todo.done
    await db('todo').update({}, { done })
    farge.log('All tasks have been marked as done.')
    process.exit(0)
  }

  numbers = numbers.split(',').map(x => x.trim())

  const list = await db('todo').find()

  for (const number of numbers) {
    const index = parseInt(number) - 1
    const todo = list[index]

    if (!todo) {
      farge.red.log(`Todo number ${number} does not exist`)
      continue

    } else {
        const done = !todo.done
        await db('todo').update({ id: todo.id }, { done })

        const status = done ? 'done' : 'undone'
        farge.italic.log(`Marked #${number} ${todo.task || '?'} as ${status}`)
    }
  }
}
