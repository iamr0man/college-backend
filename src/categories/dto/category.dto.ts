import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CategoryDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNumber()
    ParentId: number;

}
