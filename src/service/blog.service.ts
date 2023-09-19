import { prisma } from "../utils/prisma";
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
 * Get a list of all blog posts with pagination information.
 * @param page - Page number.
 * @param perPage - Number of items per page.
 * @returns - List of blog posts and total count.
 */
export async function getAllBlogs(page: number, perPage: number) {
  const totalCount = await prisma.blog.count(); // Count all blog posts

  const blogs = await prisma.blog.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
  });

  return {
    blogs,
    total: totalCount,
  };
}

/**
 * Get a blog post by its ID.
 * @param id - ID of the blog post to retrieve.
 * @returns - Blog post with the specified ID.
 */
export async function getBlogById(id: Number) {
  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
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
  try {
    const blog = await prisma.blog.update({
      where: {
        id: Number(id),
      },
      data: input,
    });
    return blog;
  } catch (error: any) {
    if (error.code === 'P2025') {
      // The error code 'P2025' indicates that the resource was not found
      return null;
    }
    throw error;
  }
}

/**
 * Delete a blog post by its ID.
 * @param id - ID of the blog post to delete.
 * @returns - Deleted blog post with the specified ID.
 */
export async function deleteBlog(id: number) {
  try {
    const blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });
    return blog;
  } catch (error: any) {
    if (error.code === 'P2025') {
      // The error code 'P2025' indicates that the resource was not found
      return null;
    }
    throw error;
  }
}
