import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { Carros } from 'src/model/carros.entity';

@Controller('carros')
export class CarrosController {
    constructor(
        private readonly carrosService: CarrosService,
    ) { }

    @Get()
    findAll() {
        return this.carrosService.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) {
        return this.carrosService.findById(id);
    }

    @Post()
    create(@Body() carro: Carros) {
        return this.carrosService.create(carro);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() carro: Carros) {
        return this.carrosService.update(id, carro);
    }

    @Delete(":id")
    remove(@Param('id') id: number) {
        return this.carrosService.remove(id);
    }
}
