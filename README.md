# Todoing

Terminal todo list manager.

### Install
`npm i -g todoing`

### Usage

```
# Create task
td c "Do yoga"
td c (if you do not enter a task here the app will ask for task input)

# Show list
td l (#shows all tasks)
td l 1, 3, 5 or 7 (#show list with 1, 3, 5 or 7 items in list)

# Update todo
td u 1 "Go for a walk"
td u 1 (if you do not enter a task here the app will ask for task input)

# Remove todo
td r 1
td r n,n,n (to remove more tasks enter numbers separated by a comma(1,2,3)).
td r (if you do not enter a number the app will ask for task input)
td r all (remove all tasks)

# Mark todo as done or undone
td d 1
td d n,n,n (to mark more tasks enter numbers separated by a comma(1,2,3)).
td d (if you do not enter a number here the app will ask for task input)
td d all (marks all tasks as done)

# Todoing aliases
Add this to your .zshrc or .bashrc file to speed things up:
alias tc="td create"
alias tl="td list"
alias tr="td remove"
alias tdd="td done"
alias tu="td update"
```

ISC licensed. Enjoy!
