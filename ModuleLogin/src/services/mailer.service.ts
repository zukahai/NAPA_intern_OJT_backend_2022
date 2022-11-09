import nodemailer from 'nodemailer';
export class MailerService {
    private transporter: nodemailer.Transporter;
    constructor() {
        this.createConnection();
    }
    public createConnection() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }
    public sendMail = async (to: string, subject: string, html: string) => {
        const mailOptions = {
            from: process.env.MAILER_EMAIL,
            to,
            subject,
            html,
        };
        return await this.transporter.sendMail(mailOptions);
    };
}
