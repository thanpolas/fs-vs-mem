# file-system vs in-memory file transformations

This is a simple benchmark that takes all `.js` files from `joyent/node`, wraps them with parens, and concatenates them to a single file.  There are two tasks, `fs` and `mem`.  The `fs` task writes intermediary files to the file system for each step.  The `mem` task performs the entire operation in memory.

## Setup
1. `npm install`
2. `npm install -g gulp`
2. `gulp fs`
3. `gulp mem`

Draw your own conclusions.
