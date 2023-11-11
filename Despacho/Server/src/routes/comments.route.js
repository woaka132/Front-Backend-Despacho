import { Router } from 'express'
import { createComment, getComments } from '../controllers/comments.controller.js'

const router = Router()

router.get('/comments', getComments)
router.post('/comment', createComment)
export default router
