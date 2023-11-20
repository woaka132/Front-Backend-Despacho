import { createAccessToken } from '../libs/jwt.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req, res) => {
  const { name, lastname, secondname, street, streetnumber, cologne, cp, cellphone, phone, email, password, username } = req.body
  try {
    const userFound = await User.findOne({ email })
    if (userFound) { return res.status(400).json(['The email is alredy in use']) }

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      lastname,
      secondname,
      street,
      streetnumber,
      cologne,
      cp,
      cellphone,
      phone,
      username,
      email,
      password: passwordHash
    })

    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id })
    res.cookie('token', token)
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      name: userSaved.name,
      secondname: userSaved.secondname,
      lastnamename: userSaved.lastname,
      street: userSaved.street,
      streetnumber: userSaved.streetnumber,
      cologne: userSaved.cologne,
      cellphone: userSaved.cellphone,
      phone: userSaved.phone,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const userFound = await User.findOne({ email })

    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const isMatch = await bcrypt.compare(password, userFound.password)

    if (!isMatch) return res.status(400).json({ message: 'Incorret password' })

    const token = await createAccessToken({ id: userFound._id })
    res.cookie('token', token)
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(400).json({ message: 'User not found' })

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    name: userFound.name,
    secondname: userFound.secondname,
    lastname: userFound.lastname,
    street: userFound.street,
    streetnumber: userFound.streetnumber,
    cologne: userFound.cologne,
    cellphone: userFound.cellphone,
    cp: userFound.cp,
    phone: userFound.phone,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.status(401).json({ message: 'Unauthorized' })
    const userFound = await User.findById(user.id)
    if (!userFound) return res.status(401).json({ message: 'Unauthorized' })

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    })
  })
}
