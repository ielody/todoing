const update = require('../../lib/update.js')

it('should not find when no todos', async ({ t, db, state, mock, restore }) => {
  mock()

  await update(db)

  restore()

  t.ok(Object.keys(state.logs).length == 1)
  t.ok(state.logs[0] == 'Todo not found\n')
})

o('should update number from input', async ({ t, db, state, mock, restore }) => {
  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  process.argv[3] = '1'
  process.argv[4] = 'fotball'

  mock()

  await update(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == 'Updated 1 to fotball\n')

  const todos = await db('todo').find()
  t.ok(todos.length == 2)
  t.ok(todos[0].task == 'fotball')
  t.ok(todos[1].task == 'basket')

})

it('should update the numbered task', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'yoga' })
  await db('todo').create({ task: 'basket' })

  state.inputs = ['fotball']

  process.argv[3] = '1'

  mock()

  await update(db)

  restore()

  t.ok(Object.keys(state.logs).length === 2)
  t.ok(state.logs[0] == 'New task\n')
  t.ok(state.logs[1] == 'Updated 1 to fotball\n')

  const todos = await db('todo').find()
  t.ok(todos.length == 2)
  t.ok(todos[0].task == 'fotball')
  t.ok(todos[1].task == 'basket')
})

