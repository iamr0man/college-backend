import { IsNotEmpty, IsString } from 'class-validator';
import {Column} from "typeorm";

export class EmployeeDto {
    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @IsNotEmpty()
    @IsString()
    LastName: string;

    @IsNotEmpty()
    @IsString()
    MiddleName: string;

    @IsNotEmpty()
    @IsString()
    Position: string;

    @IsNotEmpty()
    @IsString()
    Degree: string;

    DepartmentId: number | null;

    @IsNotEmpty()
    @IsString()
    PhoneNumber: string;

    @IsNotEmpty()
    @IsString()
    Avatar: string;

    @IsNotEmpty()
    @IsString()
    Quote: string;


}
