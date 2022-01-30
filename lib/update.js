const { input } = require('extras')

module.exports = async function update(db) {
  console.log('Update a task')
  const list = await db('todo').find()
  const number = process.argv[3]
  const index = parseInt(number) - 1
  const todo = list[index]

  if(!todo) {
    console.log('Todo not found! Is the number invalid?')
  }

  else {
    let task = process.argv[4]

    if (!task) {
      console.log('New task')
      task = await input()
    }

    const result = await db('todo').update({ id: todo.id }, { task: task })

    if (result.n) {
      console.log(`Updated ${number} to`, task)
    }

    else {
      console.log('Did not update anything')
    }

  }
}