import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBlogInput } from "../schema/blog.schema";
import { 
  createBlog, 
  getAllBlogs, 
  getBlogById, 
  updateBlog, 
  deleteBlog 
} from "../service/blog.service";

interface PaginationQuery {
  page?: string;
  perPage?: string;
}

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
      console.error("Error in createBlog controller:", error);
      reply.status(500).send({ error: "Internal Server Error. Failed to create a blog post." });
    }
  },

  /**
   * Retrieve a list of all blog posts with pagination information.
   * @param request - Fastify request object.
   * @param reply - Fastify reply object.
   * @returns - List of all blog posts with pagination information.
   */
  getAllBlogs: async (request: FastifyRequest<{ Querystring: PaginationQuery }>, reply: FastifyReply) => {
    try {
      // Safely access query parameters and provide default values
      const page = parseInt(request.query.page as string ?? '1');
      const perPage = parseInt(request.query.perPage as string ?? '10');

      const { blogs, total } = await getAllBlogs(page, perPage);

      return reply.send({ blogs, total, page, perPage });
    } catch (error) {
      console.error("Error in getAllBlogs controller:", error);
      reply.status(500).send({ error: "Internal Server Error. Failed to retrieve blog posts." });
    }
  },


  /**
   * Retrieve a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params.
   * @param reply - Fastify reply object.
   * @returns - Blog post with the specified ID.
   */
  getBlogById: async (request: FastifyRequest<{ Params: { id: Number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await getBlogById(id);
  
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
  
      return reply.send(blog);
    } catch (error) {
      console.error("Error in getBlogById controller:", error);
      reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  /**
   * Update a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params and updated data in the body.
   * @param reply - Fastify reply object.
   * @returns - Updated blog post with the specified ID.
   */
  updateBlog: async (request: FastifyRequest<{ Body: CreateBlogInput; Params: { id: Number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await updateBlog(id, { ...request.body });
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
      return reply.send(blog);
    } catch (error) {
      console.error("Error in updateBlog controller:", error);
      reply.status(500).send({ error: "Internal Server Error. Failed to update the blog post." });
    }
  },

  /**
   * Delete a blog post by its ID.
   * @param request - Fastify request object with blog ID in the params.
   * @param reply - Fastify reply object.
   * @returns - Success message upon successful deletion.
   */
  deleteBlog: async (request: FastifyRequest<{ Params: { id: Number } }>, reply: FastifyReply) => {
    try {
      const { id } = request.params;
      const blog = await deleteBlog(id);
      if (!blog) {
        return reply.status(404).send({ error: "Blog not found" });
      }
      return reply.send({ message: "Blog deleted successfully" });
    } catch (error) {
      console.error("Error in deleteBlog controller:", error);
      reply.status(500).send({ error: "Internal Server Error. Failed to delete the blog post." });
    }
  },
};

export default BlogController;
