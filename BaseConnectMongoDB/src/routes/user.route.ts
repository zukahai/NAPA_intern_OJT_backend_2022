import { RouteInterface } from '../interfaces/route.interface';
import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoute implements RouteInterface {
    userController = new UserController();
    path: string = '/users';
    router: Router = Router();
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.userController.getAll);
        this.router.get(`${this.path}/:id`, this.userController.getOne);
        this.router.post(`${this.path}`, this.userController.create);
        this.router.put(`${this.path}/:id`, this.userController.update);
        this.router.delete(`${this.path}/:id`, this.userController.delete);
    }
}
