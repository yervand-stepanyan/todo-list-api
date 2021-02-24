const router = require('express').Router()

const TodosService = require('./service/todos.service')

router.get('/',
  TodosService.getTodos
)
router.post('/',
  TodosService.addTodo
)
router.delete('/:id',
  TodosService.deleteTodo
)

module.exports = router
