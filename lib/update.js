
const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function update(db) {

  const list = await db('todo').find()
  const number = process.argv[3]
  const index = parseInt(number) - 1
  const todo = list[index]

  if(!todo) {
    farge.log('Todo not found')
    process.exit(0)
  }

  let task = process.argv[4]

  if (!task) {
    farge.log('New task')
    task = await input()
  }

  const result = await db('todo').update({ id: todo.id }, { task: task })

  if (result.n) {
    farge.log(`Updated ${number} to ${task}`)

  } else {
    farge.log('The task was not updated.')
  }
}