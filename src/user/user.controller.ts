import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'CheckUserExists')
  async checkUserExists({ email }: { email: string }) {
    const exists = await this.userService.checkUserByEmail(email);
    return { exists };
  }
}
