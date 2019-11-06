const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true,
  // in case we need to use virtuals, this allows for it
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Entry', entrySchema)
