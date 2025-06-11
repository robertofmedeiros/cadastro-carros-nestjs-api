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
exports.CarrosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carros_entity_1 = require("../../model/carros.entity");
const typeorm_2 = require("typeorm");
let CarrosService = class CarrosService {
    carrosRepository;
    constructor(carrosRepository) {
        this.carrosRepository = carrosRepository;
    }
    async create(carro) {
        return await this.carrosRepository.save(carro);
    }
    async update(id, carro) {
        const clienteResult = await this.findById(id);
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        carro.id = id;
        await this.carrosRepository
            .createQueryBuilder()
            .update(carros_entity_1.Carros)
            .set(carro)
            .where("id = :id", { id })
            .execute();
        return await this.findById(id);
    }
    async findAll() {
        const clientesList = await this.carrosRepository.find({
            order: {
                id: 'ASC',
            }
        });
        return clientesList;
    }
    async findById(id) {
        const clienteResult = await this.carrosRepository.findOneBy({
            id,
        });
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        return clienteResult;
    }
    async remove(id) {
        const clienteResult = await this.findById(id);
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        return await this.carrosRepository.delete(id);
    }
};
exports.CarrosService = CarrosService;
exports.CarrosService = CarrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carros_entity_1.Carros)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarrosService);
//# sourceMappingURL=carros.service.js.map