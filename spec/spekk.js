const connection = require('mongowave')
const extras = require('extras')

const _write = process.stdout.write

const state = {}
function reset() {
  state.count = 0
  state.inputs = []
  state.logs = []
}

extras.input = function() {
  return state.inputs[state.count++]
}

module.exports = async function run () {

  function mock() {
    process.stdout.write = function(str) {
      state.logs.push(str)
    }
  }

  function restore() {
    process.stdout.write = _write
  }

  // Set up db connection for example
  const db = await connection({ name: 'todo-test' })

  // Run before each test if defined
  async function before() {
    reset()
    await db.drop()

    // Remove all args
    for (var i = 2; i < process.argv.length; i++) {
      process.argv[i] = undefined
    }
  }

  // Run after each test if defined
  async function after() {}

  return { db, before, after, state, mock, restore }
}