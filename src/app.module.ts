import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { getTypeOrmBaseConfig } from '@work-better/core';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '../.env'),
    }),
    TypeOrmModule.forRoot({
      ...getTypeOrmBaseConfig('postgres', [User], []),
      ssl: false,
    }),
    UserModule,
  ],
})
export class AppModule {}
