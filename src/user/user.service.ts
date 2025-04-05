import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
    async getOne(username: string)
        {
            return await User.findByPk(username)
        }
}
