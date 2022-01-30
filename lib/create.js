module.exports = async function create(db) {
  console.log('ffefefefAdd an item to your list')
  const task = process.argv[3]
  if (!task) {
    console.log('TASK NOT FOUND')
  }

  else {
    const todo = await db('todo').create({ task })
    console.log(todo.task + 'nalirfn added')
  }
}