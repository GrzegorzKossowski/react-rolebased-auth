export const BASE_URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';
export const USERS_URL = '/users';

export const LINKS = {
    LOGIN: 'login',
    REGISTER: 'register',
    COMMON: 'common',
    INTRANET: 'intranet',
    EDITOR: 'editor',
    MANAGER: 'manager',
    ADMIN: 'admin',
    UNAUTHORIZED: 'unauthorized',
};
