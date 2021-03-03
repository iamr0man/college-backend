import {Controller, Get, Post, Body, Put, Param, Delete, Query} from '@nestjs/common';
import { DegreeProgramsService } from './degree-programs.service';
import { DegreeProgramDto } from './dto/degree-program.dto';
import {DegreeProgram} from "./entities/degree-program.entity";
import {DeleteResult} from "typeorm";

@Controller('degree-programs')
export class DegreeProgramsController {
  constructor(private readonly degreeProgramsService: DegreeProgramsService) {}

  @Post()
  create(@Body() degreeProgramDto: DegreeProgramDto) {
    return this.degreeProgramsService.create(new DegreeProgram(degreeProgramDto));
  }

  @Get('')
  findAll(): Promise<Array<DegreeProgram>> {
    return this.degreeProgramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.degreeProgramsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() degreeProgramDto: DegreeProgramDto) {
    return this.degreeProgramsService.update(+id, new DegreeProgram(degreeProgramDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.degreeProgramsService.remove(+id);
  }
}
