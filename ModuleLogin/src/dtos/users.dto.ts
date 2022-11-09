import { IsEmail, IsNotEmpty, IsString, MATCHES, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail({}, { message: 'Please enter a valid email' })
    @IsNotEmpty({ message: 'Email is required' })
    public email: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public password: string;

    @IsString({ message: 'Please enter a valid name' })
    @IsNotEmpty({ message: 'Role is required' })
    public name: string;

    @IsString({ message: 'Please enter a valid role' })
    @Matches(/^(admin|user)$/, { message: 'Role must be admin or user' })
    public role: string;

    @IsString({ message: 'Please enter a valid active' })
    @Matches(/^(true|false)$/, { message: 'Please enter a valid active' })
    public active: boolean;
}
export class ChangePasswordDto {
    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public password: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public newPassword: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public confirmPassword: string;
}
export class UpdateUserDto {
    @IsString({ message: 'Please enter a valid name' })
    @IsNotEmpty({ message: 'Name is required' })
    public name: string;

    @IsEmail({}, { message: 'Please enter a valid email' })
    @IsNotEmpty({ message: 'Email is required' })
    public email: string;

    @IsString({ message: 'Please enter a valid role' })
    @Matches(/^(admin|user)$/, { message: 'Role must be admin or user' })
    public role: string;

    @IsString({ message: 'Please enter a valid active' })
    @Matches(/^(true|false)$/, { message: 'Please enter a valid active' })
    public active: boolean;

    @IsString({ message: 'Please enter a valid active' })
    public password: string;
}
export class LoginUserDto {
    @IsEmail({}, { message: 'Please enter a valid email' })
    @IsNotEmpty({ message: 'Email is required' })
    public email: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public password: string;
}
export class ForgotPasswordDto {
    @IsEmail({}, { message: 'Please enter a valid email' })
    @IsNotEmpty({ message: 'Email is required' })
    public email: string;
}
export class ResetPasswordDto {
    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public password: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public confirmPassword: string;
}
export class RegisterUserDto {
    @IsEmail({}, { message: 'Please enter a valid email' })
    @IsNotEmpty({ message: 'Email is required' })
    public email: string;

    @IsString({ message: 'Please enter a valid password' })
    @MinLength(6, { message: 'Password too short' })
    @MaxLength(20, { message: 'Password too long' })
    @IsNotEmpty({ message: 'Password is required' })
    public password: string;

    @IsString({ message: 'Please enter a valid name' })
    @IsNotEmpty({ message: 'Name is required' })
    public name: string;
}
