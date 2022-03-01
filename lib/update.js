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
    return
  }

  let task = process.argv[4]

  if (!task) {
    farge.log('New task')
    task = await input()
  }

  await db('todo').update({ id: todo.id }, { task: task })

  farge.log(`Updated ${number} to ${task}`)
}