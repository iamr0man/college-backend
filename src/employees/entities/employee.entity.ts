import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'

import {Department} from "../../departments/entities/department.entity";
import { EmployeeDto } from '../dto/employee.dto'

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    MiddleName: string;

    @Column()
    Position: string;

    @Column()
    Degree: string;

    @OneToOne(type => Department)
    @JoinColumn({ name: 'DepartmentId' })
    Department: Department;

    @Column()
    DepartmentId: number;

    @Column()
    PhoneNumber: string;

    @Column()
    Avatar: string;

    @Column()
    Quote: string;

    constructor(partial: Partial<EmployeeDto|Employee>) {
        Object.assign(this, partial)
    }
}
