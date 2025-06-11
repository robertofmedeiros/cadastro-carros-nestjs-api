import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carros } from 'src/model/carros.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarrosService {
    constructor(
        @InjectRepository(Carros)
        private readonly carrosRepository: Repository<Carros>
    ) {}

    async create (carro: Carros) {
        return await this.carrosRepository.save(carro);
    }

    async update (id: number, carro: Carros) {

        const clienteResult = await this.findById(id);
        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        carro.id = id;

        await this.carrosRepository
            .createQueryBuilder()
            .update(Carros)
            .set(carro)
            .where("id = :id", { id })
            .execute();

        return await this.findById(id);
    }

    async findAll () {
        const clientesList = await this.carrosRepository.find({
            order: {
                id: 'ASC',
            }
        });

        return clientesList;
    }

    async findById (id: number) {
        const clienteResult = await this.carrosRepository.findOneBy({
            id,
        });

        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        return clienteResult;
    }

    async remove (id: number) {
        const clienteResult = await this.findById(id);
        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        return await this.carrosRepository.delete(id);
    }

}
