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
exports.GenreSchema = exports.Genre = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const mongoose_2 = require("mongoose");
let Genre = class Genre {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Genre.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Genre.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Genre.prototype, "color", void 0);
Genre = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({ timestamps: true })
], Genre);
exports.Genre = Genre;
exports.GenreSchema = mongoose_1.SchemaFactory.createForClass(Genre);
//# sourceMappingURL=genre.model.js.map