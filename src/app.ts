import fastify from 'fastify'
import routes from './router'
import dotenv from 'dotenv';

dotenv.config();
const server = fastify()

server.get('/healthcheck', async (request, reply) => {
  return { status: 'ok' }
})

server.register(routes)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})