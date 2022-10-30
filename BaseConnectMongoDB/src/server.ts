import express from 'express';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { DatabaseConnect } from './config/database.config';
import { UserRoute } from './routes/user.route';
import errorMiddleware from './middlewares/errorMiddleware';
class App {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = 3000;

        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeDatabase();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static('public'));
        this.app.use(morgan('tiny'));
        this.app.use(errorMiddleware);
    }

    private initializeRoutes() {
        this.app.use('/', new UserRoute().router);
    }

    private initializeDatabase() {
        new DatabaseConnect();
    }
}

const app = new App();
app.listen();
