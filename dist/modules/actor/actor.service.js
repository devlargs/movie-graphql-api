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
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const plaiceholder_1 = require("plaiceholder");
const actor_model_1 = require("./actor.model");
let ActorService = class ActorService {
    constructor(actorModel) {
        this.actorModel = actorModel;
    }
    async create(input) {
        const isExisting = await this.actorModel.find({
            firstName: { $regex: input.firstName, $options: "i" },
            lastName: { $regex: input.lastName, $options: "i" },
        });
        const { base64 } = await (0, plaiceholder_1.getPlaiceholder)(input.imageUrl);
        if (!isExisting.length) {
            const createdActor = new this.actorModel(Object.assign(Object.assign({}, input), { imageHashUrl: base64 }));
            return createdActor.save();
        }
        throw new common_1.HttpException(`${input.firstName} ${input.lastName} is already existing`, common_1.HttpStatus.EXPECTATION_FAILED);
    }
    getById(_id) {
        return this.actorModel.findById(_id).exec();
    }
    list(filters) {
        return this.actorModel.find(Object.assign({}, filters)).sort({ lastName: "ascending" });
    }
    async updateOne(input, _id) {
        const additionalData = {};
        if (input.imageUrl) {
            const { base64 } = await (0, plaiceholder_1.getPlaiceholder)(input.imageUrl);
            additionalData.imageHashUrl = base64;
        }
        return this.actorModel.findOneAndUpdate({ _id }, Object.assign(Object.assign({}, input), additionalData), {
            new: true,
        });
    }
};
ActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(actor_model_1.Actor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActorService);
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map