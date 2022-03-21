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
exports.DirectorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const director_model_1 = require("./director.model");
const director_service_1 = require("./director.service");
const director_inputs_1 = require("./director.inputs");
let DirectorResolver = class DirectorResolver {
    constructor(directorService) {
        this.directorService = directorService;
    }
    async director(_id) {
        return this.directorService.getById(_id);
    }
    async directors(filters) {
        return this.directorService.list(filters);
    }
    async createDirector(input) {
        return this.directorService.create(input);
    }
};
__decorate([
    (0, graphql_1.Query)(() => director_model_1.Director),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], DirectorResolver.prototype, "director", null);
__decorate([
    (0, graphql_1.Query)(() => [director_model_1.Director]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [director_inputs_1.ListDirectorInput]),
    __metadata("design:returntype", Promise)
], DirectorResolver.prototype, "directors", null);
__decorate([
    (0, graphql_1.Mutation)(() => director_model_1.Director),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [director_inputs_1.CreateDirectorInput]),
    __metadata("design:returntype", Promise)
], DirectorResolver.prototype, "createDirector", null);
DirectorResolver = __decorate([
    (0, graphql_1.Resolver)(() => director_model_1.Director),
    __metadata("design:paramtypes", [director_service_1.DirectorService])
], DirectorResolver);
exports.DirectorResolver = DirectorResolver;
//# sourceMappingURL=director.resolver.js.map