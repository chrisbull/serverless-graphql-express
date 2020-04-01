import express from 'express';
import graphiql from 'graphql-playground-middleware-express';
import { ApolloServer, gql } from 'apollo-server-express';

// serverless
import serverless from 'serverless-http';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,

  // path: '/graphql',
});

server.applyMiddleware({ app });

app.get('/playground', graphiql({ endpoint: '/graphql' }));

// START SERVER
// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
// );

const handler = serverless(app);
export { handler };
