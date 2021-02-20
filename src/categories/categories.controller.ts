import {Controller, Get, Post, Body, Put, Param, Delete, Query} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import {Category} from "./entities/category.entity";

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() categoryDto: CategoryDto): Promise<Category> {
    return this.categoriesService.create(new Category(categoryDto));
  }

  @Get('findByFilter')
  findByFilter(@Query() query) {
    return this.categoriesService.findByFilter(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoriesService.update(+id, new Category(categoryDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
