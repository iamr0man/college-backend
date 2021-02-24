import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from './config';

import { ConfigService } from './config';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    CategoriesModule,
    ConfigModule,
    EmployeesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DATA_BASE_TYPE'),
          host: configService.get('DATA_BASE_HOST'),
          port: Number(configService.get('DATA_BASE_PORT')),
          username: configService.get('DATA_BASE_USERNAME'),
          password: configService.get('DATA_BASE_PASSWORD'),
          database: configService.get('DATA_BASE'),
          entities: [
            __dirname + '/**/*.entity{.ts,.js}',
          ],
          synchronize: false,
        } as TypeOrmModuleAsyncOptions;
      }
    }),
  ]
})
export class AppModule {}
