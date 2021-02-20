import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

import { CategoryDto } from '../dto/category.dto'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    ParentId: number;

    constructor(partial: Partial<CategoryDto|Category>) {
        Object.assign(this, partial)
    }
}
