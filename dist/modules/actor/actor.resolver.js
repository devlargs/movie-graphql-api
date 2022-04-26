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
exports.ActorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const actor_model_1 = require("./actor.model");
const actor_service_1 = require("./actor.service");
const actor_inputs_1 = require("./actor.inputs");
let ActorResolver = class ActorResolver {
    constructor(actorService) {
        this.actorService = actorService;
    }
    async actor(_id) {
        return this.actorService.getById(_id);
    }
    async actors(filters) {
        return this.actorService.list(filters);
    }
    async createActor(input) {
        return this.actorService.create(input);
    }
    async updateActor(input, _id) {
        return this.actorService.updateOne(input, _id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ActorResolver.prototype, "actor", null);
__decorate([
    (0, graphql_1.Query)(() => [actor_model_1.Actor]),
    __param(0, (0, graphql_1.Args)("filters", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_inputs_1.ListActorInput]),
    __metadata("design:returntype", Promise)
], ActorResolver.prototype, "actors", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_inputs_1.CreateActorInput]),
    __metadata("design:returntype", Promise)
], ActorResolver.prototype, "createActor", null);
__decorate([
    (0, graphql_1.Mutation)(() => actor_model_1.Actor),
    __param(0, (0, graphql_1.Args)("input")),
    __param(1, (0, graphql_1.Args)("_id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actor_inputs_1.UpdateActorInput, mongoose_1.Schema.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ActorResolver.prototype, "updateActor", null);
ActorResolver = __decorate([
    (0, graphql_1.Resolver)(() => actor_model_1.Actor),
    __metadata("design:paramtypes", [actor_service_1.ActorService])
], ActorResolver);
exports.ActorResolver = ActorResolver;
//# sourceMappingURL=actor.resolver.js.map