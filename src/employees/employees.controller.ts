import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './dto/employee.dto';
import { Employee } from "./entities/employee.entity";

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() employeeDto: EmployeeDto) {
    return this.employeesService.create(new Employee(employeeDto));
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() employeeDto: EmployeeDto) {
    return this.employeesService.update(+id, employeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
