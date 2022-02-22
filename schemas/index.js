const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return [
          {
            id: "1",
            name: "Fear and Loathing from las vegas",
            genre: "Fiction",
          },
        ].filter((q) => q.id === args.id)[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
