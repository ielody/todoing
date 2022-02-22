const create = require('../../lib/create.js')

it('should not create a new todo', async ({ t, db, state, mock, restore }) => {
  state.inputs = ['']
  mock()

  await create(db)

  restore()

  t.ok(state.logs[0] == 'Add an item to your list\n')
  t.ok(state.logs[1] == 'Enter task:\n')
  t.ok(state.logs[2].includes('Task not added. You need to enter at least 1 character.'))

  const count = await db('todo').count()
  t.ok(count === 0)
})

it('should create a new todo', async ({ t, db, state, mock, restore }) => {
  state.inputs = ['hello']
  mock()

  await create(db)

  restore()

  t.ok(state.logs[0] == 'Add an item to your list\n')
  t.ok(state.logs[1] == 'Enter task:\n')
  t.ok(state.logs[2].includes('hello added'))

  const count = await db('todo').count()
  t.ok(count === 1)
})
