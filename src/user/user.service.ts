import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async checkUserByEmail(email: string): Promise<boolean> {
    const isExists = this.userRepository.existsByEmail(email);
    return isExists;
  }
}
