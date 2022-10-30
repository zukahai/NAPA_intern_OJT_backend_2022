import mongoose from 'mongoose';

const urlConnect = 'mongodb+srv://nam077:nam077@cluster0.3xpdlnj.mongodb.net/?retryWrites=true&w=majority';
export class DatabaseConnect {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose
            .connect(urlConnect)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((err) => {
                console.error('Database connection error');
            });
    }
}
