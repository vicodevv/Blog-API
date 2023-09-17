import blogRouter from "./blog.route";
import userRouter from "./user.route";

export default function routes(fastify: any, options: any, done: any) {
  fastify.register(blogRouter, { prefix: "/api/blog" });
  fastify.register(userRouter, { prefix: "/api/user" });
  
  done();
}