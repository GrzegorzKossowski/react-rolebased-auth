import React from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import { AuthType, UserType } from '../types';
import Navigation from '../components/Navigation';

function RootLayout() {
    const { auth, setAuth } = useAuth() as AuthType;
    return (
        <main className='flex w-full h-screen'>
            <Navigation />
            <div className='m-10'>
                <Outlet />
            </div>
        </main>
    );
}

export default RootLayout;
