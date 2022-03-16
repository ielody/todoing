const filter = require('../../lib/filter.js')

o('should list empty tasks', async ({ t, db, state, mock, restore }) => {

  mock()

  await filter(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == "You don't have any tasks.\n")


  const count = await db('todo').count()
  t.ok(count === 0)
})



