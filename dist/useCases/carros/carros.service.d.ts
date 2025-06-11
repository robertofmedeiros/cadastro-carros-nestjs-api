import { Carros } from 'src/model/carros.entity';
import { Repository } from 'typeorm';
export declare class CarrosService {
    private readonly carrosRepository;
    constructor(carrosRepository: Repository<Carros>);
    create(carro: Carros): Promise<Carros>;
    update(id: number, carro: Carros): Promise<Carros>;
    findAll(): Promise<Carros[]>;
    findById(id: number): Promise<Carros>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
