const graphql = require("graphql");
const Director = require("../models/director");
const Movie = require("../models/movie");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve: (parent) => {
        return Director.findById(parent.directorId);
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
        return Movie.find({ directorId: parent.id });
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(_, args) {
        return Movie.findById(args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find();
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
        return Director.findById(args.id);
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve() {
        return Director.find();
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
        name: { type: new GraphQLNonNull(GraphQLString) },
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: new GraphQLNonNull(GraphQLID) },
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
  query: Query,
  mutation: Mutation,
});
