import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async existsByEmail(email: string): Promise<boolean> {
    const user = await this.findOne({ where: { email } });
    return !!user;
  }
}
