import {z} from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const userCore = {
    email: z.string().email(),
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string'

    }).min(3).max(255),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
}
    
const createUserSchema = z.object({
    ...userCore,
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    }).min(8).max(255),
})

const createUserResponseSchema = z.object({
    id : z.string().uuid(),
    ...userCore,
})

export const {schemas: userSchemas, $ref} = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema
})

export type CreateUserInput = z.infer<typeof createUserSchema> 