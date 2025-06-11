import { CarrosService } from './carros.service';
import { Carros } from 'src/model/carros.entity';
export declare class CarrosController {
    private readonly carrosService;
    constructor(carrosService: CarrosService);
    findAll(): Promise<Carros[]>;
    findById(id: number): Promise<Carros>;
    create(carro: Carros): Promise<Carros>;
    update(id: number, carro: Carros): Promise<Carros>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
