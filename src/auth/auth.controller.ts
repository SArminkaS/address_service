
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/models/user.model';

@Controller('auth')
export class AuthController {
constructor(
private readonly userService: UserService) {}

  @Post('register')
  register(@Body() user: AuthDto) {
    const new_user = User.build({username: user.username, password: user.password})
    return this.userService.addOne(new_user)
  }
}