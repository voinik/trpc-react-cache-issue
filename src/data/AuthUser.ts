type AuthUserData = {
    id: string;
    email: string;
};

export class AuthUser {
    public id: string;
    public email: string;

    constructor({ id, email }: AuthUserData) {
        this.id = id;
        this.email = email;
    }
}
