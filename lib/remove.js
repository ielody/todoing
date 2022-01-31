module.exports = async function remove(db) {
  console.log('Removing task')
  const list = await db('todo').find()
  var numbers = process.argv[3]
  numbers = numbers.split(',').map(x => x.trim())
  for(const number of numbers) {
    const index = parseInt(number) - 1
      const todo = list[index]

  if(!todo) {
    console.log('Todo not found')
  }

  else {
    const result = await db('todo').delete({ id: todo.id })

    if (result.n) {
      console.log(`Removed ${todo.task} from list`)
    }

      else {
        console.log("Did not remove task, try again")
      }
    }
  }
}
