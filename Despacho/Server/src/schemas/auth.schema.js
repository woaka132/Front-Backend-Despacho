import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is required'
  }),
  name: z.string({
    required_error: 'name is required'
  }),
  secondname: z.string({
    required_error: 'secondname is required'
  }),
  lastname: z.string({
    required_error: 'lastname is required'
  }),
  street: z.string({
    required_error: 'street is required'
  }),
  streetnumber: z.string({
    required_error: 'streetnumber is required'
  }),
  cologne: z.string({
    required_error: 'cologne is required'
  }),
  cp: z.string({
    required_error: 'cp is required'
  }),
  cellphone: z.string({
    required_error: 'cellphone is required'
  }),
  phone: z.string({
    required_error: 'phone is required'
  }),
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 characters'
  })

})

export const loginScheman = z.object({
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 charecters'
  })
})
