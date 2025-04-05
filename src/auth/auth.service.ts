
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.getOne(username)
    if(user == null)
    {
      throw new HttpException('A felhasználó nem található!', HttpStatus.NOT_FOUND)
    }
    else if(user.password !== password)
    {
      throw new UnauthorizedException('Rossz jelszó!');
    }
    const payload = { username: user.username }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}