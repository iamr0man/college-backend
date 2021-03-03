import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DegreeProgram} from "./entities/degree-program.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class DegreeProgramsService {
  constructor(
      @InjectRepository(DegreeProgram)
      private degreeProgramRepository: Repository<DegreeProgram>
  ) {}
  create(degreeProgram: DegreeProgram) {
    return this.degreeProgramRepository.save(degreeProgram)
  }

  findAll(): Promise<Array<DegreeProgram>> {
    return this.degreeProgramRepository.find({});
  }

  async findOne(id: number): Promise<DegreeProgram> {
    const degree = await this.degreeProgramRepository.findOne(id);
    if (!degree) {
      throw new NotFoundException(degree, 'DegreeProgram Not Found')
    }
    return degree
  }

  update(id: number, degreeProgram: DegreeProgram): Promise<UpdateResult> {
    return this.degreeProgramRepository.update(+id, degreeProgram)
  }

  remove(id: number): Promise<DeleteResult> {
    return this.degreeProgramRepository.delete(+id);
  }
}
