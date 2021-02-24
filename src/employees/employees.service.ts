import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { EmployeeDto } from './dto/employee.dto';
import {Employee} from "./entities/employee.entity";

@Injectable()
export class EmployeesService {
  constructor(
      @InjectRepository(Employee)
      private employeeRepository: Repository<Employee>
  ) {}
  create(employee: Employee) {
    return this.employeeRepository.save(employee);
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, employeeDto: EmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
