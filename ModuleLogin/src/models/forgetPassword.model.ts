import { getModelForClass, prop } from '@typegoose/typegoose';
import { User } from '@models/users.model';

export class ForgetPassword {
    @prop()
    public code: string;

    @prop()
    public userId: string;

    @prop({ ref: () => User })
    public user: User;
}
export const ForgetPasswordModel = getModelForClass(ForgetPassword, { schemaOptions: { timestamps: true } });
