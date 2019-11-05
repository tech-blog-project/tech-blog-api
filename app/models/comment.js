
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  entry: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entry'
  }
}, {
  timestamps: true,
  // in case we need to use virtuals, this allows for it
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Comment', commentSchema)
