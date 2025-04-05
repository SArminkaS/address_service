import { Controller, Get, Param } from '@nestjs/common';

@Controller('address')
export class AddressController {
    @Get('getOne/:id')
    getOne(@Param() param)
    {
        return 1
    }
}
