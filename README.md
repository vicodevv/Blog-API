# Blog-API

This API allows you to create blog posts, update blog posts, delete blog posts and get all blog posts. It also includes a pagination feature that allows you to get a specific number of posts per page.

## Technologies

This API was developed with the following technologies:

- NodeJS
- Fastify
- Typescript
- PostgreSQL
- TypeORM
- Prisma

## Getting Started

Pre-requisites

- Node(LTS version)
- NPM v9.0.0 or higher
- PostgreSQL

You can get the latest version of NodeJS from [here](https://nodejs.org/en/download/) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  node -v
```

You can get the latest version of NPM from [here](https://www.npmjs.com/get-npm) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  npm -v
```

You can get the latest version of PostgreSQL from [here](https://www.postgresql.org/download/) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  psql -V
```

## Installation

Clone the project

```bash
  git clone git@github.com:vicodevv/Blog-API.git
```

Go to the project directory

```bash
  cd Blog-API
```

Install dependencies

```bash
  npm install
```

Run the code

```bash
  npm run dev
```

## Class Diagram

<img src="https://github.com/vicodevv/Blog-API/assets/55485439/4146f7aa-be87-4ba5-84d9-bd655cc45260" width=800>

## Postman Documentation

https://documenter.getpostman.com/view/17026180/2s9YC7UC7K

## Live Link

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- DATABASE_URL=your database url

## API Reference

| Method | Description            | Endpoints   |
| ------ | ---------------------- | ----------- |
| GET    | Get all blog posts     | /all        |
| GET    | Get a single blog post | /:id        |
| POST   | Create a blog post     | /create     |
| PUT    | Update a blog post     | /update/:id |
| DELETE | Delete a blog post     | /delete/:id |

## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
