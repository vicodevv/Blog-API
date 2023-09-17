import {z} from 'zod';

const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).min(8).max(255),
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string'

    }).min(3).max(255),
    role: z.enum(['ADMIN', 'USER'])
})

export type CreateUserInput = z.infer<typeof createUserSchema> 