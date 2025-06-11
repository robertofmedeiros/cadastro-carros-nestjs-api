"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosModule = void 0;
const common_1 = require("@nestjs/common");
const carros_controller_1 = require("./carros.controller");
const carros_service_1 = require("./carros.service");
const carros_entity_1 = require("../../model/carros.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CarrosModule = class CarrosModule {
};
exports.CarrosModule = CarrosModule;
exports.CarrosModule = CarrosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([carros_entity_1.Carros])],
        controllers: [carros_controller_1.CarrosController],
        providers: [carros_service_1.CarrosService],
        exports: [carros_service_1.CarrosService]
    })
], CarrosModule);
//# sourceMappingURL=carros.module.js.map