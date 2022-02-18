const farge = require('farge')({
  newline: true
})

  module.exports = function help() {
    farge.log('# Show list: td l or td l 1, 3, 5 or 7 to show 1-7 items in list')
    farge.log('# Create task: td c "Do yoga" (omitting task prompts input)')
    farge.log('# Update task: td u 1 "Go for a walk" (omitting task prompts input)')
    farge.log('# Remove task: td r 1 (omitting number prompts input), enter more numbers separated by a comma (1,2,3) or td r all.')
    farge.log('# Mark done: td d 1 (omitting number prompts input), enter more numbers separated by a comma (1,2,3) or td d all.')
    }