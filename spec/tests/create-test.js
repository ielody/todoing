const task = require('/.create.js')

test('creates a task object', async ({ t }) => {
  if (await db('todo').create({ task }))
  t.ok(true)
} )
