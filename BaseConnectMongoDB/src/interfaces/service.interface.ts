import { User } from '../models/user.model';

export interface ServiceInterface<T> {
    getAll(): Promise<T[]>;

    getOne(id: string): Promise<User | null>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T>;
    delete(id: string): Promise<T>;
}
