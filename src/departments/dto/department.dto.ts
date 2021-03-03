import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class DepartmentDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNotEmpty()
    @IsString()
    MainPhoto: string;

    @IsNotEmpty()
    @IsNumber()
    DegreeProgramId: number;

    @IsNotEmpty()
    @IsNumber()
    ManagerId: number;

    @IsNotEmpty()
    @IsString()
    Description: string;
}
