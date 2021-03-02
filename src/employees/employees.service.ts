import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
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

  findByFilter(query): Promise<Array<Employee>> {
    let params = {}
    if (query.Department) {
      params = { Department: query.Department }
    }
    return this.employeeRepository.find({
      where: params
    });
  }

  findOne(id: number) {
    const employee = this.employeeRepository.findOne(id);
    if (!employee) {
      throw new BadRequestException('Category Not Found')
    }
    return employee
  }

  update(id: number, newEmployee: Employee): Promise<UpdateResult> {
    return this.employeeRepository.update(+id, newEmployee);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.employeeRepository.delete(id);
  }
}
