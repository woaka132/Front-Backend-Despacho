import mongoose from 'mongoose'

const DaysSchema = new mongoose.Schema({
  date: {
    type: String,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export default mongoose.model('Days', DaysSchema)
