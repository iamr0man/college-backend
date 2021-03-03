import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

import { DegreeProgramDto } from '../dto/degree-program.dto'


@Entity()
export class DegreeProgram {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @Column()
    Degree: string;

    constructor(partial: Partial<DegreeProgramDto|DegreeProgram>) {
        Object.assign(this, partial)
    }
}
