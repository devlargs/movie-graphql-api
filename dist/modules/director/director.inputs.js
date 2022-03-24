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
exports.ListDirectorInput = exports.UpdateDirectorInput = exports.CreateDirectorInput = void 0;
const mongoose_1 = require("mongoose");
const graphql_1 = require("@nestjs/graphql");
let CreateDirectorInput = class CreateDirectorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateDirectorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateDirectorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateDirectorInput.prototype, "imageUrl", void 0);
CreateDirectorInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDirectorInput);
exports.CreateDirectorInput = CreateDirectorInput;
let UpdateDirectorInput = class UpdateDirectorInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateDirectorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateDirectorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateDirectorInput.prototype, "imageUrl", void 0);
UpdateDirectorInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateDirectorInput);
exports.UpdateDirectorInput = UpdateDirectorInput;
let ListDirectorInput = class ListDirectorInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListDirectorInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListDirectorInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListDirectorInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListDirectorInput.prototype, "imageUrl", void 0);
ListDirectorInput = __decorate([
    (0, graphql_1.InputType)()
], ListDirectorInput);
exports.ListDirectorInput = ListDirectorInput;
//# sourceMappingURL=director.inputs.js.map