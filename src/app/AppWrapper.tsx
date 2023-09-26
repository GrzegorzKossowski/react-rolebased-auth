import React from 'react';
import App from './RootLayout';
import { AuthProvider } from '../context/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const AppWrapper = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default AppWrapper;
