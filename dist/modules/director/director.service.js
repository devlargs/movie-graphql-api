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
exports.DirectorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const director_model_1 = require("./director.model");
let DirectorService = class DirectorService {
    constructor(directorModel) {
        this.directorModel = directorModel;
    }
    async create(input) {
        const isExisting = await this.directorModel.find({
            firstName: { $regex: input.firstName, $options: "i" },
            lastName: { $regex: input.lastName, $options: "i" },
        });
        if (!isExisting.length) {
            const createdDirector = new this.directorModel(input);
            return createdDirector.save();
        }
        throw new common_1.HttpException(`${input.firstName} ${input.lastName} is already existing`, common_1.HttpStatus.EXPECTATION_FAILED);
    }
    getById(_id) {
        return this.directorModel.findById(_id).exec();
    }
    list(filters) {
        return this.directorModel
            .find(Object.assign({}, filters))
            .sort({ lastName: "ascending" });
    }
    updateOne(input, _id) {
        return this.directorModel.findOneAndUpdate({ _id }, Object.assign({}, input), {
            new: true,
        });
    }
};
DirectorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(director_model_1.Director.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DirectorService);
exports.DirectorService = DirectorService;
//# sourceMappingURL=director.service.js.map