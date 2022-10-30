import { UserService } from '../services/user.service';
import { Response, Request, NextFunction } from 'express';
import { User } from '../models/user.model';

export class UserController {
    private userService: UserService = new UserService();

    constructor() {}

    public getAll = async (req: Request, res: Response) => {
        const users = await this.userService.getAll();
        res.send(users);
    };
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: User = req.body;
            const newUser = await this.userService.create(user);
            res.status(201).json({ data: newUser, message: 'created' });
        } catch (err) {
            console.log(err);
        }
    };

    public getOne = async (req: Request, res: Response) => {
        console.log(req.params.id);
        const user = await this.userService.getOne(req.params.id);
        res.send(user);
    };

    public update = async (req: Request, res: Response) => {
        const user = await this.userService.update(req.params.id, req.body);
        res.send(user);
    };

    public delete = async (req: Request, res: Response) => {
        const user = await this.userService.delete(req.params.id);
        res.send(user);
    };
}
