const connection = require('mongowave')

// Include file with require
const hello = require('./hello.js')

// todo list
// todo create "Buy milk"
// todo update 1 "Buy butter"
// todo delete 1
// todo done 1

// Set global variable
const command = process.argv[2]

console.log({ command })

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

async function run(){
  const db = await connection({ name: 'todo-ing' })

  if (command == 'list') {
    console.log('Do list stuff')
    const todos = await db('todo').find()

    todos.forEach((todo, i) => {
      console.log(`${i + 1}: ${todo.task}`)
    })
  }

  else if (command == 'create') {
    console.log('Do create stuff')
    const task = process.argv[3]
    if (!task) {
      console.log('TASK NOT FOUND')
    }

    else {

      const todo = await db('todo').create({ task })
      console.log(todo.id + ' added')
    }
  }

  else if (command == 'update') {
    console.log('Do update stuff')
  }

  else if (command == 'delete') {
    console.log('Do delete stuff')
  }

  else if (command == 'done') {
    console.log('Do done stuff')
  }

  process.exit(0)

}

run()

console.log('HELO')


// Advanced debugging:
// const obj = { a: 1, b: 2, c: 3, d: { f: { cuckoo: 5, world: 'hello'}} }
// console.log(JSON.stringify(obj, null, 2))
// console.log(obj)