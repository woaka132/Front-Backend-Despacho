import Days from '../models/days.model.js'

export const createDays = async (req, res) => {
  const { date, username, email } = req.body

  try {
    const userFound = await Days.findOne({ date })
    if (userFound) { return res.status(400).json(['Choose Another Day']) }
    const newDays = new Days({
      user: req.user.id,
      date,
      username,
      email
    })
    const savedDays = await newDays.save()
    res.json(savedDays)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getDays = async (req, res) => {
  const days = await Days.find({ })
  res.json(days)
}
