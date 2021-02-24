const mongoose = require('mongoose')

class MongoStorage {
  static async init (uri) {
    const options = {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    }

    await mongoose.connect(uri, options)

    console.log('MongoDB connected')
  }
}

module.exports = MongoStorage
