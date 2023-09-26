import React, { createContext, useMemo, useState } from 'react';
import { UserType } from '../types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<UserType>({
        id: '821d67af-99a3-4367-a5a9-c08c48932d5f',
        password: 'aS2._I@Xn6Avq',
        email: 'gbisp0@discuz.net',
        first_name: 'Gianna',
        last_name: 'Bisp',
        roles: [3000],
    } as UserType);

    const contextValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
