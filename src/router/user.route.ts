import { FastifyInstance } from "fastify";
import { UserController } from "../controller/user.controller";

async function userRouter(server: FastifyInstance) {
    server.post("/register", UserController.createUser);
}

export default userRouter;