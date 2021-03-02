import {Controller, Get, Post, Body, Put, Param, Delete, Query} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './dto/employee.dto';
import { Employee } from "./entities/employee.entity";
import {DeleteResult, UpdateResult} from "typeorm";

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() employeeDto: EmployeeDto) {
    return this.employeesService.create(new Employee(employeeDto));
  }

  @Get('findByFilter')
  findAll(@Query() query): Promise<Array<Employee>> {
    return this.employeesService.findByFilter(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employeeDto: EmployeeDto): Promise<UpdateResult> {
    return this.employeesService.update(+id, new Employee(employeeDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.employeesService.remove(+id);
  }
}
