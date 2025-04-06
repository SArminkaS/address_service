import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SequelizeValidationFilter } from './exception-filters/validation-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors()
  app.useGlobalFilters(new SequelizeValidationFilter());
  app.useGlobalPipes(new ValidationPipe({transform:true}));
  await app.listen(configService.get('PORT') ?? 3002, configService.get<string>('HOST') ?? 'localhost');
}
bootstrap();
