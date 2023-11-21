import mongoose from 'mongoose'

export const connectDB = async () => {
  const uri = 'mongodb+srv://juanpabloosuna2000:0qjoOto0KA3R3euu@cluster0.szeqoxu.mongodb.net/?retryWrites=true&w=majority'

  try {
    await mongoose.connect(uri)
    console.log('>>> DataBase is connect')
  } catch (error) {
    console.log(error)
  }
}
