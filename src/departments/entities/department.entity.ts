import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm'

import { EmployeeDto } from '../../employees/dto/employee.dto'
import {DegreeProgram} from "../../degree-programs/entities/degree-program.entity";
import {Employee} from "../../employees/entities/employee.entity";


@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    MainPhoto: string;

    @ManyToOne(type => DegreeProgram)
    @JoinColumn({ name: 'DegreeProgramId' })
    DegreeProgram: DegreeProgram;

    @Column()
    DegreeProgramId: number;

    @OneToOne(type => Employee)
    @JoinColumn({ name: 'ManagerId' })
    Manager: Employee;

    @Column()
    ManagerId: number;

    @Column()
    Description: string;

    constructor(partial: Partial<EmployeeDto|Department>) {
        Object.assign(this, partial)
    }
}
