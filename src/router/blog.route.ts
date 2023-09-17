import { FastifyInstance } from "fastify";
import blogController from "../controller/blog.controller";

/**
 * Register blog routes with the Fastify server.
 * @param server - FastifyInstance to register routes with.
 */
async function blogRouter(server: FastifyInstance) {
    server.post("/create", blogController.createBlog);
    server.get("/all", blogController.getAllBlogs);
    server.get("/:id", blogController.getBlogById);
    server.put("/update/:id", blogController.updateBlog);
    server.delete("/delete/:id", blogController.deleteBlog);
}

export default blogRouter;
