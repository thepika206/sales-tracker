import mongoose from 'mongoose'

const Schema = mongoose.Schema

const leadSchema = new Schema({
  name: String, 
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  //basic setup for stubbing
  description: String,
  // status: {
  //   type:String,
  //   enum: ['Closed-Won', 'Closed-Lost', 'Action-Needed', 'Waiting-for-Customer'],
  //   }
  //value: Number,
  //comments: [commentSchema],
}, {
  timestamps: true,
})

const Lead = mongoose.model('Lead', leadSchema)

export {
  Lead
}
