export type UserRoleType = 'ADMIN' | 'USER' | 'EDITOR';

export type UserType = {
    id: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    roles: ROLES[];
};

export type UserAuthType = UserType | {};

export type AuthType = {
    auth: UserType;
    setAuth: React.Dispatch<React.SetStateAction<UserType | {}>>;
};

export enum ROLES {
    AUTHOR = 1000,
    EDITOR = 2000,
    MANAGER = 3000,
    ADMIN = 4000,
}
