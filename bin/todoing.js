#!/usr/bin/env node
const { input } = require('extras')
const connection = require('mongowave')
const farge = require('farge')({
  newline: true
})

const api = require('../index.js')

let command = process.argv[2]

if (command[0] == 'l') command = 'list'
if (command[0] == 'c') command = 'create'
if (command[0] == 'u') command = 'update'
if (command[0] == 'r') command = 'remove'
if (command[0] == 'd') command = 'done'
if (command[0] == 'h') command = 'help'

if (!command) {
  console.log(farge.red.log('Command not found.'))
  // TODO: print menu
  // todo list
  // todo create "Buy milk"
  // todo update 1 "Buy butter"
  // todo remove 1
  // todo done 1
  process.exit(0)
}

async function run(){
  const db = await connection({ name: 'todoing' })

  const fn = api[command]
  if (typeof fn == 'function') {
    await fn(db)
  } else  {
    console.log(farge.red.log('Command not found.'))
  }
  process.exit(0)
}

run()

// Advanced debugging:
// const obj = { a: 1, b: 2, c: 3, d: { f: { cuckoo: 5, world: 'hello'}} }
// console.log(JSON.stringify(obj, null, 2))
// console.log(obj)