import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { createDays, getDays } from '../controllers/days.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { CreateSchemaDays } from '../schemas/days.schema.js'

const router = Router()

/*

router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTasks)
router.delete('/tasks/:id', authRequired, delateTasks)
router.put('/tasks/:id', authRequired, updateTasks)
*/
router.get('/days', authRequired, getDays)
router.post('/createdays', validateSchema(CreateSchemaDays), authRequired, createDays)

export default router
