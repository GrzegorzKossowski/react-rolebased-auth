import React, { createContext, useMemo, useState } from 'react';
import { UserType } from '../types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<UserType>({} as UserType);

    const contextValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
