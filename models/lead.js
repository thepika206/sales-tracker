import mongoose from 'mongoose'

const Schema = mongoose.Schema

const leadSchema = new Schema({
  name: {type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  //basic setup for stubbing
  description: String,
  status: {
    type:String, 
    default: 'New',
    enum: ['New', 'Working', 'Closed' ]
  },
  //value: Number,
  //comments: [commentSchema],
}, {
  timestamps: true,
})

const Lead = mongoose.model('Lead', leadSchema)

export {
  Lead
}
