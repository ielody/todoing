const done = require('../../lib/done.js')

it('should not find when no todos', async ({ t, db, state, mock, restore }) => {

  state.inputs = ['1']

  mock()

  await done(db)

  restore()

  t.ok(Object.keys(state.logs).length == 2)
  t.ok(state.logs[0] == 'Enter numbers to set as done:\n')
  t.ok(state.logs[1].includes('Todo number 1 does not exist'))
})


it('should find task with argv number', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  process.argv[3] = '1'

  mock()

  await done(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0].includes('Marked #1 yoga as done'))

  const todos = await db('todo').find()
  t.ok(todos.length == 2)
  t.ok(todos[0].task == 'yoga')
  t.ok(todos[0].done === true)
  t.ok(todos[1].task == 'basket')
  t.ok(todos[1].done === undefined)
})


it('should mark all tasks as done', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  process.argv[3] = 'all'

  mock()

  await done(db)

  restore()

  t.ok(Object.keys(state.logs).length == 1)
  t.ok(state.logs[0] == 'All tasks have been marked as done.\n')

  const todos = await db('todo').find()
  t.ok(todos.length == 2)
  t.ok(todos[0].task == 'yoga')
  t.ok(todos[0].done === true)
  t.ok(todos[1].task == 'basket')
  t.ok(todos[1].done === true)
})