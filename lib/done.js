const { input } = require('extras')

module.exports = async function done(db) {
console.log('Marking a task as done')
const list = await db('todo').find()
let numbers = process.argv[3]
numbers  = numbers.split().map(x => x.trim())
for(const number of numbers) {
  const index = parseInt(number) - 1
    const todo = list[index]

    if(!todo) {
    console.log('Could not find task, try again.')
    }
  }
}