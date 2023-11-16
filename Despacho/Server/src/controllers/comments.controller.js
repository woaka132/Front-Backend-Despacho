import Comment from '../models/comments.model.js'

export const getComments = async (req, res) => {
  const comments = await Comment.find()
  res.json(comments)
}

export const createComment = async (req, res) => {
  const { title, description, date } = req.body

  const newComment = new Comment({
    title,
    description,
    date
  })

  const savedComment = await newComment.save()
  res.json(savedComment)
}
