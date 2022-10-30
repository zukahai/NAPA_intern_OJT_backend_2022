import { ServiceInterface } from '../interfaces/service.interface';
import { User, UserModel } from '../models/user.model';
import { HttpException } from '../exceptions/HttpException';

export class UserService implements ServiceInterface<User> {
    userModel = UserModel;
    constructor() {
        this.userModel = UserModel;
    }
    async create(item: User): Promise<User> {
        if (await this.checkEmail(item.email)) {
            throw new HttpException(409, `This email ${item.email} already exists`);
        }
        const user: User = (await this.userModel.create(item)) ?? new User();
        return user;
    }

    async delete(id: string): Promise<User> {
        const user: User = (await this.userModel.findByIdAndDelete(id)) ?? new User();
        return user;
    }

    async getAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async getOne(id: string): Promise<User> {
        const user: User = (await this.userModel.findById(id)) ?? new User();
        return user;
    }

    async update(id: string, item: User): Promise<User> {
        const user: User = (await this.userModel.findByIdAndUpdate(id, item)) ?? new User();
        return user;
    }
    async checkEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email });
    }
}
