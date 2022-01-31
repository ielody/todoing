const { input } = require('extras')

module.exports = async function done(db) {
console.log('Marking a task as done')
const list = await db('todo').find()
let numbers = process.argv[3]
numbers  = numbers.split().map(x => x.trim())
console.log(numbers)



}