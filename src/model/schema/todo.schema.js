const mongoose = require('mongoose')
const mongooseToJson = require('@meanie/mongoose-to-json')

const TodoSchema = new mongoose.Schema({
  description: { type: String, maxlength: 100, required: true },
  done: { type: Boolean, required: true },
  id: { type: String, maxlength: 100 }
}, { timestamps: true })

TodoSchema.plugin(mongooseToJson)

module.exports = TodoSchema
