import { FastifyInstance } from "fastify";
import { UserController } from "../controller/user.controller";
import { $ref } from "../schema/user.schema";

async function userRouter(server: FastifyInstance) {
    server.post("/register",{
        schema: {
            body : $ref('createUserSchema'),
            response: {
                201: $ref('createUserResponseSchema')
            },
        },
    },UserController.createUser);
}

export default userRouter;