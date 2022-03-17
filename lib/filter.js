const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function filter(db) {
  const todos = await db('todo').find()

  if(!todos.length) {
    farge.log("You don't have any tasks.")
    return
  }

  let word = process.argv[3]
  console.log('Find tasks containing your chosen word')

  if(!word) {
    farge.log("Type a word")
    word = await input()

  let filterWord = await db('todo').find({ task: word} )

    filterWord.forEach((todo, i) => {
      const output = `${i + 1}: ${todo.task || '?'}`
      farge[todo.done ? 'dim' : 'blue'].log(output)
    })
  }
}