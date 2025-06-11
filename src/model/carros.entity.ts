import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carros {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    modelo: string;

    @Column()
    anoFabricacao: number;

    @Column()
    cor: string;

}