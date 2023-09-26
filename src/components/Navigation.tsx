import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthType } from '../types';

const Navigation = () => {
    const { auth } = useAuth() as AuthType;
    return (
        <nav className='ps-4 pe-6 pt-4 h-full bg-slate-500 text-slate-200'>
            <div className='space-y-4 flex flex-col'>
                <h4 className='text-3xl'>Public</h4>
                <Link className='link' to='/login'>
                    Login
                </Link>
                <Link className='link' to='/register'>
                    Register
                </Link>

                <h4 className='text-3xl'>Private</h4>
                <Link className='link' to='/common'>
                    Common
                </Link>
                <Link className='link' to='/intranet'>
                    Intranet
                </Link>
                <Link className='link' to='/editor'>
                    Editor
                </Link>
                <Link className='link' to='/manager'>
                    Management
                </Link>
                <Link className='link' to='/admin'>
                    Admin
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
