const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function done(db) {
const todos = await db('todo').find()

if(!todos.length) {
farge.log("You don't have any tasks.")
return
}

let word = process.argv[3]

if(!word)
farge.log('Find tasks containing your chosen word')
word = await input()

//const filterWord = await db('project').find({ name: word })

}