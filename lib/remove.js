const farge = require('farge')({
  newline: true
})

module.exports = async function remove(db) {
  const list = await db('todo').find()
  var numbers = process.argv[3]
  numbers = numbers.split(',').map(x => x.trim())
  for(const number of numbers) {
    const index = parseInt(number) - 1
    const todo = list[index]

    if(!todo) {
      farge.red.log("Todo not found")
    }

    else {
      const result = await db('todo').delete({ id: todo.id })

    if (result.n) {
      console.log(`Removed ${todo.task} from list`)
    }

    else {
      farge.red.log("Did not remove task, try again")
    }
   }
  }
}
