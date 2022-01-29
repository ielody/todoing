const connection = require('mongowave')
const { input } = require('extras')

const create = require('./lib/create.js')
const list = require('./lib/list.js')
const remove = require('./lib/remove.js')
const update = require('./lib/update.js')

const api = { create, list, update, remove }

const command = process.argv[2]

if (!command) {
  console.log('Command not found.')
  // TODO: print menu
  // todo list
  // todo create "Buy milk"
  // todo update 1 "Buy butter"
  // todo delete 1
  // todo done 1
  process.exit(0)
}

module.exports = async function run(){
  const db = await connection({ name: 'todo-ing' })

  const fn = api[command]
  if (typeof fn == 'function') {
    await fn(db)
  } else  {
    console.log('Command not found.')
  }
  process.exit(0)
}

// Advanced debugging:
// const obj = { a: 1, b: 2, c: 3, d: { f: { cuckoo: 5, world: 'hello'}} }
// console.log(JSON.stringify(obj, null, 2))
// console.log(obj)