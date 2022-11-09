import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto, ForgotPasswordDto, LoginUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import userModel, { User } from '@models/users.model';
import { isEmpty } from '@utils/util';
import UserService from '@services/users.service';
import { MailerService } from '@services/mailer.service';
import { RESET_PASSWORD_TEMPLATE } from '@/mail/template.mail';
import { ForgotPasswordService } from '@services/forgotPassword.service';

class AuthService {
    public users;
    public userService: UserService;
    public mailerService: MailerService;
    public forgotPasswordService: ForgotPasswordService;
    public constructor() {
        this.users = userModel;
        this.userService = new UserService();
        this.mailerService = new MailerService();
        this.forgotPasswordService = new ForgotPasswordService();
    }

    public async signup(userData: UpdateUserDto): Promise<User> {
        return this.userService.registerUser(userData);
    }

    public async login(userData: LoginUserDto): Promise<{ cookie: string; findUser: User }> {
        const findUser = await this.userService.login(userData);
        if (!findUser) throw new HttpException(409, 'Wrong credentials');
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return { cookie, findUser };
    }

    public async logout(userData: User): Promise<User> {
        if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

        const findUser: User = await this.users.findOne({ email: userData.email, password: userData.password });
        if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

        return findUser;
    }

    public createToken(user: User): TokenData {
        const dataStoredInToken: DataStoredInToken = { _id: user._id };
        const secretKey: string = SECRET_KEY;
        const expiresIn: number = 60 * 60;

        return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
    }
    public async createUrlForgotPassword(id: string, email: string): Promise<string> {
        // code is 6 digit random number
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        await this.forgotPasswordService.create({ email, code, userId: id });
        const appUrl = process.env.APP_URL;
        return `http://localhost:3000/reset-password/${code}`;
    }

    public createCookie(tokenData: TokenData): string {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    public async forgetPassword(userData: ForgotPasswordDto): Promise<string> {
        const findUser = await this.users.findOne({ email: userData.email });
        if (!findUser) throw new HttpException(409, 'Wrong credentials');
        const tokenData = this.createToken(findUser);
        await this.mailerService.sendMail(
            userData.email,
            'Reset Password',
            RESET_PASSWORD_TEMPLATE(await this.createUrlForgotPassword(findUser._id, userData.email)),
        );
        return 'Email sent';
    }
    public async resetPassword(userData: ForgotPasswordDto): Promise<string> {
        const findUser = await this.users.findOne({ email: userData.email });
        if (!findUser) throw new HttpException(409, 'Wrong credentials');
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return cookie;
    }
}

export default AuthService;
