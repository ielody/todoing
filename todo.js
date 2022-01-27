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
    console.log('Your tasks')
    const todos = await db('todo').find()

    todos.forEach((todo, i) => {
      console.log(`${i + 1}: ${todo.task}`)
    })
  }


  else if (command == 'create') {
    console.log('Add an item to your list')
    const task = process.argv[3]
    if (!task) {
      console.log('TASK NOT FOUND')
    }


    else {
      const todo = await db('todo').create({ task })
      console.log(todo.task + ' added')
    }
  }

  else if (command == 'update') {

      const task = process.argv[4]
      if(!task) {
        console.log('Ikke funnet')
      }
       //kjør liste
        // const todos = await db('todo').find()
        // todos.forEach((todo, i) => {
        // console.log(`${i + 1}: ${todo.task}`)})

        // nummer
      //   console.log('\nEnter the number of the task to update')
      //   const number = process.argv[5]
      //   console.log(process.argv[5])
      //   const index = parseInt(number) - 1
      //   const todoupdate = todos[index]
      //   if(todoupdate) {
      //     await db('todo').delete({ id: todoupdate.id })
      //   }

      //   else if (!todoupdate) {
      //     console.log('Invalid todo number')
      //   }

      // console.log('Etter nummer')
        //const text = process.argv[6]

     else {

      const todo = await db('todo').update({id: task.id }, {task: task})
      console.log('updated', todo, 'to', task)
    }

  }

  else if (command == 'delete') {
  console.log('Do delete stuff')

  }
  // else if (command == 'done') {
  //   console.log('Do done stuff')
  // }

  process.exit(0)

}

run()

console.log('HELO')


// Advanced debugging:
// const obj = { a: 1, b: 2, c: 3, d: { f: { cuckoo: 5, world: 'hello'}} }
// console.log(JSON.stringify(obj, null, 2))
// console.log(obj)