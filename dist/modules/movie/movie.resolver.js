"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const movie_model_1 = require("./movie.model");
const movie_service_1 = require("./movie.service");
const movie_inputs_1 = require("./movie.inputs");
const director_model_1 = require("../director/director.model");
const genre_model_1 = require("../genre/genre.model");
const actor_model_1 = require("../actor/actor.model");
let MovieResolver = class MovieResolver {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async movie(_id) {
        return this.movieService.getById(_id);
    }
    async movies(filters) {
        return this.movieService.list(filters);
    }
    async createMovie(input) {
        return this.movieService.create(input);
    }
    async directors(movie) {
        await movie.populate({ path: "directors", model: director_model_1.Director.name });
        return movie.directors;
    }
    async actors(movie) {
        await movie.populate({ path: "actors", model: actor_model_1.Actor.name });
        return movie.actors;
    }
    async genres(movie) {
        await movie.populate({ path: "genres", model: genre_model_1.Genre.name });
        return movie.genres;
    }
    async updateMovie(input, _id) {
        return this.movieService.updateOne(input, _id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => movie_model_1.Movie),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "movie", null);
__decorate([
    (0, graphql_1.Query)(() => [movie_model_1.Movie]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_inputs_1.ListMovieInput]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "movies", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_model_1.Movie),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_inputs_1.CreateMovieInput]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "createMovie", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [director_model_1.Director]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "directors", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [actor_model_1.Actor]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "actors", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [genre_model_1.Genre]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "genres", null);
__decorate([
    (0, graphql_1.Mutation)(() => movie_model_1.Movie),
    __param(0, (0, graphql_1.Args)("input")),
    __param(1, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_inputs_1.UpdateMovieInput, mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], MovieResolver.prototype, "updateMovie", null);
MovieResolver = __decorate([
    (0, graphql_1.Resolver)(() => movie_model_1.Movie),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieResolver);
exports.MovieResolver = MovieResolver;
//# sourceMappingURL=movie.resolver.js.map