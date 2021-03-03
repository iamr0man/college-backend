import {Controller, Get, Post, Body, Put, Param, Delete, Query} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import {Category} from "./entities/category.entity";
import {DeleteResult} from "typeorm";

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categoryDto: CategoryDto): Promise<Category> {
    return this.categoriesService.create(new Category(categoryDto));
  }

  @Get('findByFilter')
  findByFilter(@Query() query): Promise<Category[]> {
    return this.categoriesService.findByFilter(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() categoryDto: CategoryDto): Promise<Category> {
    try {
      const category = await this.categoriesService.findOne(+id);
      await this.categoriesService.update(+id, new Category(categoryDto));
      return category
    } catch (err) {
      console.log(err)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.categoriesService.remove(+id);
  }
}
