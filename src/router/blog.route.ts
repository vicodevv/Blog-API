import { FastifyInstance } from "fastify";
import blogController from "../controller/blog.controller";

async function blogRouter(server: FastifyInstance) {
    server.post("/create", blogController.createBlog);
    server.get("/all", blogController.getAllBlogs);
    server.get("/:id", blogController.getBlogById);
    server.put("/update/:id", blogController.updateBlog);
    server.delete("/delete/:id", blogController.deleteBlog);
}

export default blogRouter;
