const { TodosModel } = require('../../../model')

class TodosService {
  static async getTodos (request, response, next) {
    try {
      const todos = await TodosModel.getTodos()

      return response.json(todos)
    } catch (error) {
      next(error)
    }
  }

  static async getTodoById (request, response, next) {
    const { id } = request.params

    try {
      const result = await TodosModel.getTodoById(id)

      return response.json(result)
    } catch (error) {
      next(error)
    }
  }

  static async addTodo (request, response, next) {
    const { description, done, id } = request.body

    try {
      const payload = { description, done, id }
      const todo = await TodosModel.addTodo(payload)

      return response.json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async updateTodo (request, response, next) {
    const { description, done, id } = request.body

    try {
      const payload = { description, done, id }
      const todo = await TodosModel.updateTodo(payload)

      return response.json(todo)
    } catch (error) {
      next(error)
    }
  }

  static async deleteTodo (request, response, next) {
    const { id } = request.params

    try {
      const result = await TodosModel.deleteTodo(id)

      return response.json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TodosService
