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
exports.GenreResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const genre_model_1 = require("./genre.model");
const genre_service_1 = require("./genre.service");
const genre_inputs_1 = require("./genre.inputs");
let GenreResolver = class GenreResolver {
    constructor(genreService) {
        this.genreService = genreService;
    }
    async genre(_id) {
        return this.genreService.getById(_id);
    }
    async genres(filters) {
        return this.genreService.list(filters);
    }
    async createGenre(input) {
        return this.genreService.create(input);
    }
    async deleteGenre(_id) {
        this.genreService.delete(_id);
        return true;
    }
};
__decorate([
    (0, graphql_1.Query)(() => genre_model_1.Genre),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "genre", null);
__decorate([
    (0, graphql_1.Query)(() => [genre_model_1.Genre]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_inputs_1.ListGenreInput]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "genres", null);
__decorate([
    (0, graphql_1.Mutation)(() => genre_model_1.Genre),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_inputs_1.CreateGenreInput]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "createGenre", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "deleteGenre", null);
GenreResolver = __decorate([
    (0, graphql_1.Resolver)(() => genre_model_1.Genre),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreResolver);
exports.GenreResolver = GenreResolver;
//# sourceMappingURL=genre.resolver.js.map