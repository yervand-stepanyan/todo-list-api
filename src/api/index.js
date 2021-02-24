const app = require('express')()

const todos = require('./todos/todos.api')

app.use('/todos', todos)

module.exports = app
