import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, './grpc/protos/user.proto'),
      url: configService.get<string>('GRPC_URL'),
    },
  });

  await app.startAllMicroservices();
  const port = configService.get<number>('PORT') as number;
  await app.listen(port);
  console.log(`User Service is running on port ${port}`);
}
bootstrap();
