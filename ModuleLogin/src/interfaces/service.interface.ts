export interface IService<T> {
    create(createDTO: any): Promise<T>;
    delete(id: string): Promise<T>;
    find(id: string): Promise<T>;
    findAll(): Promise<T[]>;
    update(id: string, updateDTO: any): Promise<T>;
}
