import fastify from 'fastify';
import routes from './router';
import dotenv from 'dotenv';
import { blogSchemas } from './schema/blog.schema';

export function createFastify() {
  const server = fastify();
  dotenv.config();

  // Add schemas
  for (const schema of blogSchemas) {
    server.addSchema(schema);
  }

  // Register routes
  server.register(routes);

  return server;
}

// Start the server if this script is executed directly (not when testing)
if (require.main === module) {
  const server = createFastify();

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}
