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
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const genre_model_1 = require("./genre.model");
let GenreService = class GenreService {
    constructor(genreModel) {
        this.genreModel = genreModel;
    }
    find(filters) {
        return this.genreModel.find(Object.assign({}, filters)).exec();
    }
    async create(input) {
        const isExisting = await this.genreModel.find({
            name: { $regex: input.name, $options: "i" },
        });
        if (!isExisting.length) {
            const response = new this.genreModel(input);
            return response.save();
        }
        throw new common_1.HttpException(`${input.name} is already existing`, common_1.HttpStatus.EXPECTATION_FAILED);
    }
    getById(_id) {
        return this.genreModel.findById(_id).exec();
    }
    delete(_id) {
        return this.genreModel.deleteOne({ _id });
    }
    list(filters) {
        return this.genreModel.find(Object.assign({}, filters)).exec();
    }
    update(input, _id) {
        return this.genreModel.findOneAndUpdate({ _id }, Object.assign({}, input), { new: true });
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(genre_model_1.Genre.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map