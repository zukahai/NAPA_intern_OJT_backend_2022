import { getModelForClass, prop } from '@typegoose/typegoose';

export class User {
    @prop()
    public _id: string;

    @prop()
    public name: string;

    @prop()
    public email: string;

    @prop()
    public password: string;

    @prop()
    public role: string;

    @prop()
    public active: boolean;
}
const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true } });
export default UserModel;
