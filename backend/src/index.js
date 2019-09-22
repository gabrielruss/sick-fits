const { GraphQLServer } = require('graphql-yoga');
require('dotenv').config();
const { prisma } = require('./generated/prisma');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  props => {
    console.log(`Server is now running on port http://localhost:${props.port}`);
  }
);
