import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { DepartmentDto } from './dto/department.dto';
import {Department} from "./entities/department.entity";

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Department)
              private departmentRepository: Repository<Department>) {}


  create(department: Department) {
    return this.departmentRepository.save(department)
  }

  findAll() {
    return this.departmentRepository.find();
  }

  async findOne(id: number) {
    const department = await this.departmentRepository.findOne(+id, {
      relations: ['Manager', 'DegreeProgram']
    });
    if(!department) {
      throw new BadRequestException(department, 'Department Not found')
    }
    return department
  }

  async update(id: number, department: Department) {
    return this.departmentRepository.update(+id, department)

  }

  remove(id: number) {
    return this.departmentRepository.delete(+id)
  }
}
