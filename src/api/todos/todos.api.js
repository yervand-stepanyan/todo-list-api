const router = require('express').Router()

const TodosService = require('./service/todos.service')

router.get('/',
  TodosService.getTodos
)
router.get('/:id',
  TodosService.getTodoById
)
router.post('/',
  TodosService.addTodo
)
router.delete('/:id',
  TodosService.deleteTodo
)

module.exports = router
