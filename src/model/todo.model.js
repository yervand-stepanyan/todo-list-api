const mongoose = require('mongoose')

const { TodoSchema } = require('./schema')

class TodosModel {
  static getTodos () {
    const conditions = {}

    return TodosModel.model.find(conditions)
  }

  static getTodoById (id) {
    const conditions = { _id: id }

    return TodosModel.model.findOne(conditions)
  }

  static addTodo (docs) {
    return TodosModel.model.create(docs)
  }

  static updateTodo (docs) {
    const { id } = docs

    return TodosModel.model.updateOne({ _id: id }, docs)
  }

  static deleteTodo (id) {
    const conditions = { _id: id }

    return TodosModel.model.deleteOne(conditions)
  }
}

TodosModel.model = mongoose.model('Todos', TodoSchema)

module.exports = TodosModel
