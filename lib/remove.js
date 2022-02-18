const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function remove(db) {

  var numbers = process.argv[3]

  if (!numbers) {
    farge.log('Enter task number(s) to remove:')
    numbers = await input()
  }

  if (!numbers) {
    farge.log('No numbers found')
    process.exit(0)
  }

  if (numbers === 'all') {
    await db('todo').delete()
    farge.log('All tasks have been deleted')
    process.exit(0)
  }

  numbers = numbers.split(',').map(x => x.trim())

  const list = await db('todo').find()

  for(const number of numbers) {
    const index = parseInt(number) - 1
    const todo = list[index]

    if (!todo) {
      farge.red.log(`Todo number ${number} does not exist`)
      continue

    } else {
      const result = await db('todo').delete({ id: todo.id })

    if (result.n) {
          farge.log(`Removed ${todo.task} from list`)

    } else {
          farge.red.log("Did not remove task, try again")
    }
    }
  }
}
