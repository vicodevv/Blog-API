import blogRouter from "./blog.router";

export default function routes(fastify: any, options: any, done: any) {
  fastify.register(blogRouter, { prefix: "/api/blog" });
  done();
}