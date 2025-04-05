import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){}
    
    @Get('getOne/:id')
    async getOne(@Param('id') id: string)
    {
        const address = await this.addressService.getOne(id)
        if(address==null)
        {
            throw new HttpException('Nem található a megadott cím!',HttpStatus.NOT_FOUND)
        }
        else
        {
            return address
        }
    }
}
