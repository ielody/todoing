const { input } = require("extras")

  module.exports = function help() {
    console.log('# To list your tasks: td l')
    console.log('# To create new tasks: td c "Do yoga" (omitting task will ask for input)')
    console.log('# To update existing tasks: td u 1 "Go for a walk" (omitting task will ask for input)')
    console.log('# To remove tasks: td r 1 (omitting number here will ask for number input) or enter more numbers separated by a comma (1,2,3).')
    console.log('# To mark tasks as done: td d 1 (omitting number here will ask for number input) or enter more numbers separated by a comma (1,2,3).')
    }