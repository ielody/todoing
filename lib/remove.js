module.exports = async function remove(db) {
  console.log('Removing task')
  const list = await db('todo').find()
  const number = process.argv[3]
  const index = parseInt(number) - 1
  const todo = list[index]

  if(!todo) {
    console.log('Todo not found')
  }

  else {
    const result = await db('todo').delete({ id: todo.id })

    if (result.n) {
      console.log(`Removed ${number} from list`)
    }

      else {
      console.log("Did not remove task")
    }
  }
}
