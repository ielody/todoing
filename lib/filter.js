const { input } = require('extras')
const farge = require('farge')({
  newline: true
})

module.exports = async function done(db) {

let word = process.argv[3]

if(!word)
farge.log('Find tasks containing your chosen word')
word = await input()


}