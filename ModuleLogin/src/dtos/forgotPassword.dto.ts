import { IsNotEmpty, IsString } from 'class-validator';

export class CreateForgotPasswordDto {
    @IsString({ message: 'Please enter a valid code' })
    @IsNotEmpty({ message: 'Code is required' })
    public code: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsString({ message: 'Please enter a valid email' })
    public email: string;

    @IsString({ message: 'Please enter a valid userId' })
    @IsNotEmpty({ message: 'userId is required' })
    public userId: string;
}
