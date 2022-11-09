import { IService } from '@interfaces/service.interface';
import { ForgetPassword, ForgetPasswordModel } from '@models/forgetPassword.model';
import UserService from '@services/users.service';
import { CreateForgotPasswordDto } from '@dtos/forgotPassword.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

export class ForgotPasswordService implements IService<ForgetPassword> {
    public forgetPasswordModel;
    public userService: UserService;
    constructor() {
        this.forgetPasswordModel = ForgetPasswordModel;
        this.userService = new UserService();
    }

    async create(createDTO: CreateForgotPasswordDto): Promise<ForgetPassword> {
        if (isEmpty(createDTO)) throw new HttpException(400, "You're not resource");
        const findUser = await this.userService.findByEmail(createDTO.email);
        if (!findUser) throw new HttpException(409, "You're not user");
        return await this.forgetPasswordModel.create({
            ...createDTO,
            userId: findUser._id,
        });
    }

    async delete(id: string): Promise<ForgetPassword> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        const findForgetPassword: ForgetPassword = await this.find(id);
        if (!findForgetPassword) throw new HttpException(409, "You're not user");
        return await this.forgetPasswordModel.findByIdAndDelete(id);
    }

    async find(id: string): Promise<ForgetPassword> {
        return await this.forgetPasswordModel.findById(id);
    }

    async findAll(): Promise<ForgetPassword[]> {
        return await this.forgetPasswordModel.find();
    }

    async update(id: string, updateDTO: any): Promise<ForgetPassword> {
        return Promise.resolve(undefined);
    }
}
