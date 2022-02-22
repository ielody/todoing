const task = require('../../lib/create.js')
const connection = require('mongowave')

test('creates a task object', async ({ t }) => {
  const db = await connection({ name: 'todoing' })
  await db('todo').create({ task })
  t.ok(true)
} )


