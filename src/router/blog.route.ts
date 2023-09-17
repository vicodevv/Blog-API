import { FastifyInstance } from "fastify";
import blogController from "../controller/blog.controller";

async function blogRouter(server: FastifyInstance) {
    server.post("/", blogController);
}

export default blogRouter;
