import { Injectable } from '@nestjs/common';
import { Address } from 'src/models/address.model';

@Injectable()
export class AddressService {
    async getOne(id: string)
    {
        return await Address.findByPk(id)
    }
}
