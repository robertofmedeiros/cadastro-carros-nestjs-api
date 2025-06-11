import { Module } from '@nestjs/common';
import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { Carros } from 'src/model/carros.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Carros])],
  controllers: [CarrosController],
  providers: [CarrosService],
  exports: [CarrosService]
})
export class CarrosModule {}
