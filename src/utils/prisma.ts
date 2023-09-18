import { PrismaClient } from '@prisma/client';

// Create a Prisma client instance
const prisma = new PrismaClient();

// Function to clear data from the BlogPost table
async function clearBlogPostTable() {
  try {
    // Use Prisma to delete all records from the BlogPost table
    await prisma.blog.deleteMany({});
  } catch (error) {
    console.error('Error clearing the BlogPost table:', error);
  }
}

export { clearBlogPostTable, prisma };
