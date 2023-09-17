import { FastifyRequest, FastifyReply } from "fastify";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export const UserController = {
    createUser: async (request: FastifyRequest<{
        Body: CreateUserInput
    }>, reply: FastifyReply) => {
        const body = request.body

        try {
            const user = await createUser(body);

            return reply.status(201).send(user)

        } catch (error) {
            console.log(error)
            return reply.status(500).send(error)
        }
    }
};