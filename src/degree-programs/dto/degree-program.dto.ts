import { IsNotEmpty, IsString } from 'class-validator';

export class DegreeProgramDto {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNotEmpty()
    @IsString()
    Description: string;

    @IsNotEmpty()
    @IsString()
    Degree: number;
}
