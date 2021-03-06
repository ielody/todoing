const list = require('../../lib/list.js')

it('should list empty tasks', async ({ t, db, state, mock, restore }) => {
  mock()

  await list(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == "You don't have any tasks\n")


  const count = await db('todo').count()
  t.ok(count === 0)
})

it('should list tasks', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'banana' })
  await db('todo').create({ task: 'apple' })

  mock()

  await list(db)

  restore()

  t.ok(Object.keys(state.logs).length === 3)
  t.ok(state.logs[0] == 'Your tasks\n')
  t.ok(state.logs[1].includes('banana'))
  t.ok(state.logs[2].includes('apple'))

  const count = await db('todo').count()
  t.ok(count === 2)
})

it('should list specific tasks', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'banana' })
  await db('todo').create({ task: 'apple' })

  process.argv[3] = '1'

  mock()

  await list(db)

  restore()

  t.ok(Object.keys(state.logs).length === 2)
  t.ok(state.logs[0] == 'Your tasks\n')
  t.ok(state.logs[1].includes('banana'))

  const count = await db('todo').count()
  t.ok(count === 2)
})

it('should list last task', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'banana' })
  await db('todo').create({ task: 'apple' })

  process.argv[3] = '-1'

  mock()

  await list(db)

  restore()

  t.ok(Object.keys(state.logs).length === 2)
  t.ok(state.logs[0] == 'Your tasks\n')
  t.ok(state.logs[1].includes('apple'))

  const count = await db('todo').count()
  t.ok(count === 2)
})

