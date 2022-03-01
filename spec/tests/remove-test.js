const remove = require('../../lib/remove.js')

it('should not find when no todos', async ({ t, db, state, mock, restore }) => {

  state.inputs = ['1']

  mock()

  await remove(db)

  restore()

  t.ok(Object.keys(state.logs).length == 2)
  t.ok(state.logs[0] == 'Enter task number(s) to remove:\n')
  t.ok(state.logs[1].includes('Todo number 1 does not exist'))
})

it('should find task with argv number', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  process.argv[3] = '1'

  mock()

  await remove(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == `Removed yoga from list\n`)

  const todos = await db('todo').find()
  t.ok(todos.length == 1)
  t.ok(todos[0].task == 'basket')
})

it('should delete all', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  process.argv[3] = 'all'

  mock()

  await remove(db)

  restore()

  t.ok(Object.keys(state.logs).length == 1)
  t.ok(state.logs[0] == 'All tasks have been deleted\n')

  const count = await db('todo').count()
  t.ok(count === 0)
})
