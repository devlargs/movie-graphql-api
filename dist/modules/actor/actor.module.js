"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const actor_model_1 = require("./actor.model");
const actor_service_1 = require("./actor.service");
const actor_resolver_1 = require("./actor.resolver");
let ActorModule = class ActorModule {
};
ActorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: actor_model_1.Actor.name, schema: actor_model_1.ActorSchema }]),
        ],
        providers: [actor_service_1.ActorService, actor_resolver_1.ActorResolver],
    })
], ActorModule);
exports.ActorModule = ActorModule;
//# sourceMappingURL=actor.module.js.map