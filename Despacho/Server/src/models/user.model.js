import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  secondname: {
    type: String,
    require: true,
    trim: true
  },
  lastname: {
    type: String,
    require: true,
    trim: true
  },
  street: {
    type: String,
    require: true,
    trim: true
  },
  streetnumber: {
    type: String,
    require: true,
    trim: true
  },
  cologne: {
    type: String,
    require: true,
    trim: true
  },
  cp: {
    type: String,
    require: true,
    trim: true
  },
  cellphone: {
    type: String,
    require: true,
    trim: true
  },
  phone: {
    type: String,
    require: true,
    trim: true
  },
  username: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)
