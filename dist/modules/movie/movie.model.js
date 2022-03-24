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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSchema = exports.Movie = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const mongoose_2 = require("mongoose");
const director_model_1 = require("../director/director.model");
const genre_model_1 = require("../genre/genre.model");
let Movie = class Movie {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Movie.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [director_model_1.Director]),
    (0, mongoose_1.Prop)({ type: [mongoose_2.Schema.Types.ObjectId], ref: director_model_1.Director.name }),
    __metadata("design:type", Array)
], Movie.prototype, "directors", void 0);
__decorate([
    (0, graphql_1.Field)(() => [genre_model_1.Genre]),
    (0, mongoose_1.Prop)({ type: [mongoose_2.Schema.Types.ObjectId], ref: genre_model_1.Genre.name }),
    __metadata("design:type", Array)
], Movie.prototype, "genres", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Movie.prototype, "imageUrl", void 0);
Movie = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({ timestamps: true })
], Movie);
exports.Movie = Movie;
exports.MovieSchema = mongoose_1.SchemaFactory.createForClass(Movie);
//# sourceMappingURL=movie.model.js.map