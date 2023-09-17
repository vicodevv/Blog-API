import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export type CreateBlogInput = z.infer<typeof createBlogSchema>;

export const { schemas: blogSchemas, $ref } = buildJsonSchemas({
  createBlogSchema,
});

