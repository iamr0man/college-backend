import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentDto } from './dto/department.dto';
import {Department} from "./entities/department.entity";


@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() departmentDto: DepartmentDto) {
    return this.departmentsService.create(new Department(departmentDto));
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() departmentDto: DepartmentDto) {
    return this.departmentsService.update(+id, new Department(departmentDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
