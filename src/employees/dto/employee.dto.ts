import { IsNotEmpty, IsString } from 'class-validator';

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

    // Department

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
