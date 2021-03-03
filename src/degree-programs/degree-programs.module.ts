import { Module } from '@nestjs/common';
import { DegreeProgramsService } from './degree-programs.service';
import { DegreeProgramsController } from './degree-programs.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { DegreeProgram } from "./entities/degree-program.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([DegreeProgram])
  ],
  controllers: [DegreeProgramsController],
  providers: [DegreeProgramsService]
})
export class DegreeProgramsModule {}
