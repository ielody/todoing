const c = require('ansi-colors')

module.exports = async function done(db) {
console.log(c.italic('Marking task as done'))
const list = await db('todo').find()
console.log(list)
let numbers = process.argv[3]
console.log(numbers)
numbers = numbers.split().map(x => x.trim())
for(const number of numbers) {
  const index = parseInt(number) - 1
    const todo = list[index]
    todo.done = c.strikethrough(todo.task)

    if (typeof (todo.task) == 'undefined')
      console.log('Task is undefined, please choose another task.')

    if(todo.done) {
      await db('todo').update({id: todo.id}, {task: todo.done})
      console.log(`Marked ${todo.task} as done`)
    }

    else if(!todo) {
      console.log(c.red('Could not find task, try again.'))
    }
  }
}
