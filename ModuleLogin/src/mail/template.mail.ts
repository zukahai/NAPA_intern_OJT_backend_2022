export const RESET_PASSWORD_TEMPLATE = (token: string) => {
    return `
    <div>
      <p>Click the following link to reset your password:</p>
      <a href="${token}">Reset Password</a>
    </div>
  `;
};

export const WELCOME_TEMPLATE = (name: string) => {
    return `
    <div>
      <p>Welcome to the app, ${name}!</p>
    </div>
  `;
};
