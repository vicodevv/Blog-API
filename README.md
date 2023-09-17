# Blog-API

This API allows you to create blog posts and share them with other users. You can also view posts created by other users. You can also like and comment on posts. You can also follow other users and view

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
- MongoDB

You can get the latest version of NodeJS from [here](https://nodejs.org/en/download/) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  node -v
```

You can get the latest version of NPM from [here](https://www.npmjs.com/get-npm) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  npm -v
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

## Entity Relationship Diagram

<img src="https://user-images.githubusercontent.com/55485439/236048256-26eadb25-8e5b-4559-9b36-c013f64f3850.png" width=800>

## Postman Documentation

## Live Link

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- PORT=your port number
- DATABASE_URL=your database url
- JWT_SECRET=your jwt secret

## API Reference

| Method | Description       | Endpoints  |
| ------ | ----------------- | ---------- |
| GET    | Get all posts     | /posts     |
| GET    | Get a single post | /posts/:id |
| POST   | Create a post     | /posts     |
| PUT    | Update a post     | /posts/:id |
| DELETE | Delete a post     | /posts/:id |

## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
