import mongoose from 'mongoose'

export const connectDB = async () => {
  const uri = 'mongodb+srv://profile22:pass@cluster0.4ppwkn4.mongodb.net/?retryWrites=true&w=majority'

  try {
    await mongoose.connect(uri)
    console.log('>>> DataBase is connect')
  } catch (error) {
    console.log(error)
  }
}
