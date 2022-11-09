import { ChangePasswordDto, CreateUserDto, LoginUserDto, RegisterUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { IService } from '@interfaces/service.interface';
import UsersModel, { User } from '@models/users.model';
import { Hash } from '@utils/hash';

class UserService implements IService<User> {
    public userModel;

    constructor() {
        this.userModel = UsersModel;
    }

    async create(resource: CreateUserDto): Promise<User> {
        if (isEmpty(resource)) throw new HttpException(400, "You're not resource");
        if (await this.userModel.findOne({ email: resource.email })) {
            throw new HttpException(409, `You're email ${resource.email} already exists`);
        }
        const hashedPassword = await Hash.hashPassword(resource.password);
        return await this.userModel.create({ ...resource, password: hashedPassword });
    }

    async delete(id: string): Promise<User> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        if (await this.userModel.findOne({ id })) {
            return await this.userModel.findByIdAndDelete(id);
        }
        throw new HttpException(409, "You're not user");
    }

    async find(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email });
    }

    async update(id: string, updateDTO: UpdateUserDto): Promise<User> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        if (isEmpty(updateDTO)) {
            throw new HttpException(400, "You're not data");
        }
        if (updateDTO.email) {
            const findUser: User = await this.findByEmail(updateDTO.email);
            if (findUser && findUser._id !== id) {
                throw new HttpException(409, `You're email ${updateDTO.email} already exists`);
            }
        }
        if (updateDTO.password) {
            const hashedPassword = await Hash.hashPassword(updateDTO.password);
            updateDTO = { ...updateDTO, password: hashedPassword };
        }
        const updateUserById: User = await this.userModel.findByIdAndUpdate(id, { updateDTO });
        if (!updateUserById) throw new HttpException(409, "You're not user");
        return updateUserById;
    }
    public async activateUser(id: string): Promise<User> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        const findUser: User = await this.userModel.findById(id);
        if (!findUser) throw new HttpException(409, "You're not user");
        const activateUserById: User = await this.userModel.findByIdAndUpdate(id, { active: true });
        if (!activateUserById) throw new HttpException(409, "You're not user");
        return activateUserById;
    }
    public async deactivateUser(id: string): Promise<User> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        const findUser: User = await this.userModel.findById(id);
        if (!findUser) throw new HttpException(409, "You're not user");
        const deactivateUserById: User = await this.userModel.findByIdAndUpdate(id, { active: false });
        if (!deactivateUserById) throw new HttpException(409, "You're not user");
        return deactivateUserById;
    }
    public async changePassword(id: string, data: ChangePasswordDto): Promise<User> {
        if (isEmpty(id)) throw new HttpException(400, "You're not id");
        const findUser: User = await this.userModel.findById(id);
        if (!findUser) throw new HttpException(409, "You're not user");
        const isPasswordMatching: boolean = await Hash.comparePassword(data.password, findUser.password);
        if (!isPasswordMatching) throw new HttpException(409, "You're not old password");
        if (data.newPassword !== data.confirmPassword) throw new HttpException(409, "You're not new password");
        const hashedPassword = await Hash.hashPassword(data.newPassword);
        const changePasswordById: User = await this.userModel.findByIdAndUpdate(id, { password: hashedPassword });
        if (!changePasswordById) throw new HttpException(409, "You're not user");
        return changePasswordById;
    }
    public async registerUser(data: RegisterUserDto): Promise<User> {
        if (isEmpty(data)) throw new HttpException(400, "You're not data");
        if (await this.userModel.findOne({ email: data.email })) {
            throw new HttpException(409, `You're email ${data.email} already exists`);
        }
        const hashedPassword = await Hash.hashPassword(data.password);
        return await this.userModel.create({ ...data, password: hashedPassword });
    }
    public async login(data: LoginUserDto): Promise<User> {
        if (isEmpty(data)) throw new HttpException(400, "You're not data");
        const findUser: User = await this.userModel.findOne({ email: data.email });
        if (!findUser) throw new HttpException(409, "You're not user");
        const isPasswordMatching: boolean = await Hash.comparePassword(data.password, findUser.password);
        if (!isPasswordMatching) throw new HttpException(409, "You're not password");
        return findUser;
    }
}

export default UserService;
