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

  numbers = numbers.split(',').map(x => x.trim())

  const list = await db('todo').find()

  for (const number of numbers) {
    const index = parseInt(number) - 1
    const todo = list[index]

    if (!todo) {
      farge.red.log(`Todo number ${number} does not exist`)
      continue
    }

    const done = !todo.done

    await db('todo').update({ id: todo.id }, { done })

    if (done) {
      farge.italic.log(`Marked ${todo.task} as done`)

    } else {
      farge.italic.log(`Undone`)
    }

  }
}
