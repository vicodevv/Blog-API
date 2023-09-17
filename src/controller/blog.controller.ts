import { FastifyRequest, FastifyReply } from "fastify";

async function blogController(request: FastifyRequest, reply: FastifyReply) {
    reply.send({ status: "ok" });
};

export default blogController;