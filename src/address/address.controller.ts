import { BadRequestException, Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService){}
    
    @UseGuards(AuthGuard)
    @Get('getOne/:id')
    async getOne(@Param('id',
        new ParseUUIDPipe(
            {
                errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE,
                exceptionFactory() {
                    return new BadRequestException('Az id nem megfelelő UUID4 formátumú!')
                },
            })) id: string)
    {
        const address = await this.addressService.getOne(id)
        if(address==null)
        {
            throw new HttpException('Nem található a megadott cím!',HttpStatus.NOT_FOUND)
        }
        return address
    }
}
