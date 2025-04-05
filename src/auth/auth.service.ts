
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService
  ) {}

  async authUser(username: string, password: string) {
    const user = await this.userService.getOne(username)
    if(user == null)
    {
      throw new HttpException('A felhasználó nem található!', HttpStatus.NOT_FOUND)
    }
    else if(user.password !== password)
    {
      throw new UnauthorizedException('Rossz jelszó!');
    }
    return user
  }
}