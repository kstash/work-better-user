import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './user/user.entity';
import { getTypeOrmBaseConfig } from '@work-better/core';
import { join } from 'path';

dotenv.config();

const config = {
  ...getTypeOrmBaseConfig(
    'postgres',
    [User],
    [join(__dirname, 'migrations/*.ts')],
  ),
} as DataSourceOptions;

export default new DataSource(config);
