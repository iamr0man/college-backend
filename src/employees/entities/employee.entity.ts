import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

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

    // @Column()
    // Department: string;

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
