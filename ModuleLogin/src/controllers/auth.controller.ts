import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { HttpException } from '@exceptions/HttpException';

class AuthController {
    public authService = new AuthService();

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const signUpUserData: User = await this.authService.signup(userData);

            res.status(201).json({ data: signUpUserData, message: 'signup' });
        } catch (error) {
            next(error);
        }
    };

    public logIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const { cookie, findUser } = await this.authService.login(userData);

            res.setHeader('Set-Cookie', [cookie]);
            res.status(200).json({ data: findUser, message: 'login' });
        } catch (error) {
            next(error);
        }
    };

    public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userData: User = req.user;
            const logOutUserData: User = await this.authService.logout(userData);

            res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
            res.status(200).json({ data: logOutUserData, message: 'logout' });
        } catch (error) {
            next(error);
        }
    };
    public forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email } = req.body;
            const user = await this.userService.findUserByEmail(email);
            if (!user) throw new HttpException(404, 'User not found');
            const url = await this.authService.createUrlForgotPassword(user._id, email);
            await this.authService.mailerService.sendMail(email, RESET_PASSWORD_TEMPLATE(url));
            res.status(200).json({ message: 'Check your email' });
        } catch (error) {
            next(error);
        }
    };
}

export default AuthController;
