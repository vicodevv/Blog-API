import fastify from 'fastify'
import routes from './router'
import dotenv from 'dotenv';
import { blogSchemas } from './schema/blog.schema';

const server = fastify()
dotenv.config();

async function main(){
  
  for(const schema of blogSchemas){
    server.addSchema(schema)
  }

server.register(routes)

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
}

main()