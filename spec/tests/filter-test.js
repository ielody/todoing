const filter = require('../../lib/filter.js')

it('should list empty tasks', async ({ t, db, state, mock, restore }) => {
  state.inputs = ['']
  mock()

  await filter(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == "You don't have any tasks.\n")

  const count = await db('todo').count()
  t.ok(count === 0)
})


it('should take word from input and list tasks', async ({ t, db, state, mock, restore }) => {

  await db('todo').create({ task: 'coffee' })
  await db('todo').create({ task: 'tea' })

  process.argv[3] = 'coffee'

  mock()

  await filter(db)

  restore()

  t.ok(Object.keys(state.logs).length === 1)
  t.ok(state.logs[0] == 'Find tasks containing your chosen word\n')

  const filterWord = await db('todo').find({ task: 'coffee' } )
  console.log(filterWord)
  t.ok(filterWord.length == 1)
  t.ok(filterWord[0].task == 'coffee')

})
