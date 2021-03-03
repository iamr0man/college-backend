import {NotFoundException, Body, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './entities/category.entity'
import {DeleteResult, Repository, UpdateResult} from "typeorm";

@Injectable()
export class CategoriesService {
  constructor(
      @InjectRepository(Category)
      private categoryRepository: Repository<Category>
  ) {}

  create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category)
  }

  findByFilter(query): Promise<Category[]> {
    let params = {}
    if (query.ParentId) {
      params = { ParentId: query.ParentId }
    }
    return this.categoryRepository.find({
      where: params
    });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      throw new NotFoundException(category, 'Category Not Found')
    }
    return category
  }


  async update(id: number, category: Category): Promise<UpdateResult> {
    return await this.categoryRepository.update(+id,category);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
