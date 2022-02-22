const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const directors = [
  {
    id: "dir_1",
    name: "Martin Scorsese",
  },
  {
    id: "dir_2",
    name: "Christopher Nolan",
  },
];

const movies = [
  {
    id: "mov_1",
    name: "Shutter Island",
    genre: "Fiction",
    directorId: `dir_1`,
  },
  {
    id: "mov_2",
    name: "The Dark Knight",
    genre: "Fiction",
    directorId: `dir_2`,
  },
];

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve: (parent, args) => {
        return directors.filter((q) => q.id === parent.directorId)?.[0] ?? null;
      },
    },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent) {
        return movies.filter((q) => q.directorId === parent.id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(_, args) {
        return movies.filter((q) => q.id === args.id)[0];
      },
    },
    director: {
      type: DirectorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(_, args) {
        return directors.filter((q) => q.id === args.id)[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
