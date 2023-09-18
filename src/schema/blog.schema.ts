import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

/**
 * Schema for creating a new blog post.
 */
const createBlogSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  content: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content must be a string",
  }),
  author: z.string({
    required_error: "Author is required",
    invalid_type_error: "Author must be a string",
  }),
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
