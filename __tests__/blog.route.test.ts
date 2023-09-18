import fastify from 'fastify';
import { FastifyInstance } from 'fastify';
import  blogRouter from '../src/router/blog.route';
import { clearBlogPostTable } from '../src/utils/prisma';

describe('Blog Route Tests', () => {
  let app: FastifyInstance;

  beforeAll(() => {
    app = fastify();
    blogRouter(app);
  });

  afterAll(async () => {
    app.close();
    await clearBlogPostTable();
  });

    it('should create a new blog post', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/create',
      payload: {
        id: 1,
        title: 'Test Blog',
        content: 'This is a test blog post.',
        author: 'Test Author',
      },
    });

    expect(response.statusCode).toBe(201);
    const blog = JSON.parse(response.body);
    expect(blog.title).toBe('Test Blog');
    expect(blog.content).toBe('This is a test blog post.');
    expect(blog.author).toBe('Test Author');
    });

    it('should retrieve all blog posts', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/all',
    });

    expect(response.statusCode).toBe(200);
    const blogs = JSON.parse(response.body);
    expect(blogs).toHaveProperty('blogs');
    expect(blogs).toHaveProperty('total');
    expect(blogs).toHaveProperty('page');
    expect(blogs).toHaveProperty('perPage');
    expect(blogs.blogs.length).toBeGreaterThan(0);
    });

    it('should retrieve a blog post by its ID', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/1',
    });

    expect(response.statusCode).toBe(200);
    const blog = JSON.parse(response.body);
    expect(blog.title).toBe('Test Blog');
    expect(blog.content).toBe('This is a test blog post.');
    expect(blog.author).toBe('Test Author');
    });

    it('should update a blog post by its ID', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: '/update/1',
      payload: {
        title: 'Updated Blog',
        content: 'This is an updated blog post.',
        author: 'Updated Author',
    },
    });

    expect(response.statusCode).toBe(200);
    const blog = JSON.parse(response.body);
    expect(blog.title).toBe('Updated Blog');
    expect(blog.content).toBe('This is an updated blog post.');
    expect(blog.author).toBe('Updated Author');

    });

    it('should delete a blog post by its ID', async () => {
    const response = await app.inject({
      method: 'DELETE',
      url: '/delete/1',
    });

    expect(response.statusCode).toBe(200);
    });
    // it('should handle missing fields when creating a blog post', async () => {
    //   const response = await app.inject({
    //     method: 'POST',
    //     url: '/create',
    //     payload: {
    //       // Missing required fields: title, content, author
    //     },
    //   });
  
    //   expect(response.statusCode).toBe(400); // Bad Request
    // });
  
    // it('should handle invalid input data when creating a blog post', async () => {
    //   const response = await app.inject({
    //     method: 'POST',
    //     url: '/create',
    //     payload: {
    //       title: 'Test Blog',
    //       content: 12345, // Invalid content (should be a string)
    //       author: 'Test Author',
    //     },
    //   });
  
    //   expect(response.statusCode).toBe(400); // Bad Request
    // });
  
    // it('should handle updating a non-existent blog post', async () => {
    //   const response = await app.inject({
    //     method: 'PUT',
    //     url: '/update/1000', // Non-existent ID
    //     payload: {
    //       title: 'Updated Blog',
    //       content: 'This is an updated blog post.',
    //       author: 'Updated Author',
    //     },
    //   });
  
    //   expect(response.statusCode).toBe(404); // Not Found
    // });
  
    // it('should handle deleting a non-existent blog post', async () => {
    //   const response = await app.inject({
    //     method: 'DELETE',
    //     url: '/delete/1000', // Non-existent ID
    //   });
  
    //   expect(response.statusCode).toBe(404); // Not Found
    // });
  
    // it('should handle pagination and return the correct number of posts per page', async () => {
    //   // Assuming you have already created multiple blog posts for testing
    //   const response = await app.inject({
    //     method: 'GET',
    //     url: '/all?page=1&perPage=5', // Adjust page and perPage as needed
    //   });
  
    //   expect(response.statusCode).toBe(200);
    //   const blogs = JSON.parse(response.body);
    //   expect(blogs).toHaveProperty('blogs');
    //   expect(blogs).toHaveProperty('total');
    //   expect(blogs).toHaveProperty('page');
    //   expect(blogs).toHaveProperty('perPage');
    //   expect(blogs.blogs.length).toBe(5); // Adjust based on your perPage setting
    // });
});
