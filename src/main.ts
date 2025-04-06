import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SequelizeValidationFilter } from './exception-filters/validation-exception.filter';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new SequelizeValidationFilter());
  app.useGlobalPipes(new ValidationPipe({transform:true}));
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    methods:'GET,POST,PUT,DELETE'
  })
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
