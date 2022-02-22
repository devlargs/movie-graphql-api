const graphql = require("graphql");
const Director = require("../models/director");
const Movie = require("../models/movie");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve: (parent, args) => {
        // return directors.filter((q) => q.id === parent.directorId)?.[0] ?? null;
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
        // return movies.filter((q) => q.directorId === parent.id);
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
        // return movies.filter((q) => q.id === args.id)[0];
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
        // return directors.filter((q) => q.id === args.id)[0];
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDirector: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const director = new Director({
          name: args.name,
        });

        try {
          const newDirector = await director.save();
          return newDirector;
        } catch (ex) {}
      },
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        directorId: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        const newMovie = new Movie({
          name: args.name,
          genre: args.genre,
          directorId: args.directorId,
        });

        return newMovie.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
