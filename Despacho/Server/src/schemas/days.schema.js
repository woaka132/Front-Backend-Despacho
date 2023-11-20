import { z } from 'zod'

export const CreateSchemaDays = z.object({
  date: z.string({
    required_error: 'Date is required'
  }),
  username: z.string({
    required_error: 'The username is required'
  }),
  email: z.string({
    required_error: 'The username is required'
  })
})
