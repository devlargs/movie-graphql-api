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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const movie_model_1 = require("./movie.model");
let MovieService = class MovieService {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }
    async create(input) {
        const isExisting = await this.movieModel.find({
            title: {
                $regex: input.title,
                $options: "i",
            },
        });
        if (isExisting.length) {
            throw new common_1.HttpException(`${input.title} is already existing`, common_1.HttpStatus.EXPECTATION_FAILED);
        }
        const createdMovie = new this.movieModel(input);
        return createdMovie.save();
    }
    getById(_id) {
        return this.movieModel.findById(_id).exec();
    }
    list(filters) {
        return this.movieModel.find(Object.assign({}, filters)).exec();
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(movie_model_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map