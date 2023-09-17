import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

/**
 * Schema for creating a new blog post.
 */
const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

/**
 * Type definition for the input data of creating a new blog post.
 */
export type CreateBlogInput = z.infer<typeof createBlogSchema>;

/**
 * Export JSON schemas generated from the createBlogSchema.
 */
export const { schemas: blogSchemas, $ref } = buildJsonSchemas({
  createBlogSchema,
});
