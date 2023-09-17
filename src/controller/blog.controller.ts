import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBlogInput } from "../schema/blog.schema";
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog  } from "../service/blog.service";
export const blogController = {

    /**
    * Controller function to create a blog
    * @param (FastifyRequest)
    * @param reply
    * @returns
    * @description
    * This function is responsible for creating a blog.
    * It receives the request and reply objects from Fastify.
    * */

    createBlog: async (request: FastifyRequest<{ Body: CreateBlogInput }>, reply: FastifyReply) => {
        try {
          const blog = await createBlog({ ...request.body });
          return reply.status(201).send(blog);
        } catch (error) {
          reply.status(500).send({ error: "Internal Server Error" });
        }
      },

    /** 
     * @param request
     * @param reply
     * @returns
     * @description
     * This function is responsible for getting all blogs.
     * It receives the request and reply objects from Fastify.
     * */

    getAllBlogs: async (request: FastifyRequest, reply: FastifyReply) => {
        try {
          const blogs = await getAllBlogs();
          return reply.send(blogs);
        } catch (error) {
          reply.status(500).send({ error: "Internal Server Error" });
        }
      },

    /**
     * @param request
     * @param reply
     * @returns
     * @description
     * This function is responsible for getting a blog by id.
     * It receives the request and reply objects from Fastify.
     * */

    getBlogById: async (request: FastifyRequest<{Params: {id: number}}>, reply: FastifyReply) => {
        try {
          const { id } = request.params; // Assuming you get the ID from the route parameter
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
     * @param request
     * @param reply
     * @returns
     * @description
     * This function is responsible for updating a blog.
     * It receives the request and reply objects from Fastify.
     * */

    updateBlog: async (request: FastifyRequest<{ Body: CreateBlogInput , Params: {id: number}}>, reply: FastifyReply) => {
        try {
          const { id } = request.params; // Assuming you get the ID from the route parameter
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
     * @param request
     * @param reply
     * @returns
     * @description
     * This function is responsible for deleting a blog.
     * It receives the request and reply objects from Fastify.
     * */

    deleteBlog: async (request: FastifyRequest<{Params: {id: number}}>, reply: FastifyReply) => {
        try {
          const { id } = request.params; // Assuming you get the ID from the route parameter
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


export default blogController;