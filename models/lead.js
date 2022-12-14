import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: { type: Schema.Types.ObjectId, ref: 'Profile' },
},{
  timestamps: true
})


const leadSchema = new Schema({
  name: {type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  description: String,
  status: {
    type: String, 
    default: 'New',
    enum: ['New', 'Working', 'Closed' ]
  },
  value: {
    type: Number,
    default: 0,
    min: [0, 'value must be a positive number'],
  },
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Lead = mongoose.model('Lead', leadSchema)

export {
  Lead
}
