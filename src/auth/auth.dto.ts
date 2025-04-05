import { IsNotEmpty } from 'class-validator';


export class AuthDto {
    @IsNotEmpty({message:'Adj meg egy nevet!'})
    username: string;

    @IsNotEmpty({message:'Adj meg egy emailt!'})
    password: string;
}