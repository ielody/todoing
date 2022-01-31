module.exports = async function remove(db) {
  console.log('Removing task')
  const list = await db('todo').find()
  const number = process.argv[3]
  const index = parseInt(number) - 1
  const todo = list[index]

  if(!todo) {
    console.log('Todo not found! Is the number invalid?')
  }

}
