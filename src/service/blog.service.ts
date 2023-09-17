import prisma from "../utils/prisma";
import { CreateBlogInput } from "../schema/blog.schema";

/**
 * Create a new blog post.
 * @param input - Data for creating a new blog post.
 * @returns - Newly created blog post.
 */
export async function createBlog(input: CreateBlogInput) {
  const blog = await prisma.blog.create({
    data: input,
  });
  return blog;
}

/**
 * Get a list of all blog posts.
 * @returns - List of all blog posts.
 */
export async function getAllBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

/**
 * Get a blog post by its ID.
 * @param id - ID of the blog post to retrieve.
 * @returns - Blog post with the specified ID.
 */
export async function getBlogById(id: number) {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return blog;
}

/**
 * Update a blog post by its ID.
 * @param id - ID of the blog post to update.
 * @param input - Updated data for the blog post.
 * @returns - Updated blog post with the specified ID.
 */
export async function updateBlog(id: number, input: CreateBlogInput) {
  const blog = await prisma.blog.update({
    where: {
      id,
    },
    data: input,
  });
  return blog;
}

/**
 * Delete a blog post by its ID.
 * @param id - ID of the blog post to delete.
 * @returns - Deleted blog post with the specified ID.
 */
export async function deleteBlog(id: number) {
  const blog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return blog;
}
