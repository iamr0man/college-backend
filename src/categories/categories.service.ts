import {BadRequestException, Body, Injectable} from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './entities/category.entity'
import {DeleteResult, Repository} from "typeorm";

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

  findOne(id: number): Promise<Category> {
    const category = this.categoryRepository.findOne(id);
    if (!category) {
      throw new BadRequestException('Category Not Found')
    }
    return category
  }


  async update(id: number, newCategory: Category): Promise<Category> {
    newCategory.Id = id
    return await this.categoryRepository.save(newCategory);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }
}
