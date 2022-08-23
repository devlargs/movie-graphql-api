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
exports.ListActorInput = exports.UpdateActorInput = exports.CreateActorInput = void 0;
const mongoose_1 = require("mongoose");
const graphql_1 = require("@nestjs/graphql");
let CreateActorInput = class CreateActorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateActorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateActorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateActorInput.prototype, "imageUrl", void 0);
CreateActorInput = __decorate([
    (0, graphql_1.InputType)()
], CreateActorInput);
exports.CreateActorInput = CreateActorInput;
let UpdateActorInput = class UpdateActorInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateActorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateActorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateActorInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateActorInput.prototype, "imageHashUrl", void 0);
UpdateActorInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateActorInput);
exports.UpdateActorInput = UpdateActorInput;
let ListActorInput = class ListActorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListActorInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListActorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListActorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListActorInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListActorInput.prototype, "imageHashUrl", void 0);
ListActorInput = __decorate([
    (0, graphql_1.InputType)()
], ListActorInput);
exports.ListActorInput = ListActorInput;
//# sourceMappingURL=actor.inputs.js.map