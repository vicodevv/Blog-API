import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBlogInput } from "../schema/blog.schema";
import { 
  createBlog, 
  getAllBlogs, 
  getBlogById, 
  updateBlog, 
  deleteBlog 
} from "../service/blog.service";

/**
 * BlogController is responsible for handling blog-related operations.
 */
export const BlogController = {
  /**
   * Create a new blog post.
   * @param request - Fastify request object with CreateBlogInput in the body.
   * @param reply - Fastify reply object.
   * @returns - Newly created blog post.
   */
  createBlog: async (request: FastifyRequest<{ Body: CreateBlogInput }>, reply: FastifyReply) => {
    try {
      const blog = await createBlog({ ...request.body });
      return reply.status(201).send(blog);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  /**
   * Retrieve a list of all blog posts.
   * @param request - Fastify request object.
   * @param reply - Fastify reply object.
   * @returns - List of all blog posts.
   */
  getAllBlogs: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const blogs = await getAllBlogs();
      return reply.send(blogs);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  /**
   * Retrieve a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params.
   * @param reply - Fastify reply object.
   * @returns - Blog post with the specified ID.
   */
  getBlogById: async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await getBlogById(id);
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
      return reply.send(blog);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  /**
   * Update a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params and updated data in the body.
   * @param reply - Fastify reply object.
   * @returns - Updated blog post with the specified ID.
   */
  updateBlog: async (request: FastifyRequest<{ Body: CreateBlogInput; Params: { id: number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await updateBlog(id, { ...request.body });
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
      return reply.send(blog);
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  /**
   * Delete a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params.
   * @param reply - Fastify reply object.
   * @returns - Success message upon successful deletion.
   */
  deleteBlog: async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await deleteBlog(id);
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
      return reply.send({ message: "Blog deleted successfully" });
    } catch (error) {
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },
};

export default BlogController;
