import prisma from "../utils/prisma";
import { CreateBlogInput } from "../schema/blog.schema";

export async function createBlog(input: CreateBlogInput) {
  const blog = await prisma.blog.create({
    data: input,
  });
  return blog;
}

export async function getAllBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

export async function getBlogById(id: number) {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return blog;
}

export async function updateBlog(id: number, input: CreateBlogInput) {
  const blog = await prisma.blog.update({
    where: {
      id,
    },
    data: input,
  });
  return blog;
}

export async function deleteBlog(id: number) {
  const blog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return blog;
}
