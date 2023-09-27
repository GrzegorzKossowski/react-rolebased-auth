import React from 'react';
import App from './RootLayout';
import { AuthProvider } from '../context/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import store from '../store';

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </Provider>
    );
};

export default AppWrapper;
