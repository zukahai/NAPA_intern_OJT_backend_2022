import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userService from '@services/users.service';

class UsersController {
    public userService = new userService();

    public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllUsersData: User[] = await this.userService.findAll();

            res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const findOneUserData: User = await this.userService.find(userId);

            res.status(200).json({ data: findOneUserData, message: 'findOne' });
        } catch (error) {
            next(error);
        }
    };

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData: CreateUserDto = req.body;
            const createUserData: User = await this.userService.create(userData);

            res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
            next(error);
        }
    };

    public updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const userData: CreateUserDto = req.body;
            const updateUserData: User = await this.userService.update(userId, userData);

            res.status(200).json({ data: updateUserData, message: 'updated' });
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const deleteUserData: User = await this.userService.delete(userId);

            res.status(200).json({ data: deleteUserData, message: 'deleted' });
        } catch (error) {
            next(error);
        }
    };
    public activateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const activateUserData: User = await this.userService.activateUser(userId);

            res.status(200).json({ data: activateUserData, message: 'activated' });
        } catch (error) {
            next(error);
        }
    };
    public deactivateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const deactivateUserData: User = await this.userService.deactivateUser(userId);

            res.status(200).json({ data: deactivateUserData, message: 'deactivated' });
        } catch (error) {
            next(error);
        }
    };
}

export default UsersController;
