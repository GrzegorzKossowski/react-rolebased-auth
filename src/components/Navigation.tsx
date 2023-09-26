import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthType, ROLES } from '../types';
import { LINKS } from '../config/constants';

const Navigation = () => {
    const { auth } = useAuth() as AuthType;

    const isLinkAllowed = (allowedRoles: ROLES[]) => {
        return auth?.roles?.find(role => allowedRoles?.includes(role))
            ? ''
            : 'allowed';
    };

    return (
        <nav className='ps-4 pe-6 pt-4 h-full bg-slate-500 text-slate-200'>
            <div className='space-y-4 flex flex-col'>
                <h4 className='text-3xl'>Public</h4>
                <Link className='link' to='/login'>
                    Login
                </Link>
                <Link className='link' to={`/${LINKS.REGISTER}`}>
                    Register
                </Link>

                <h4 className='text-3xl'>Private</h4>
                <Link
                    className={`link ${isLinkAllowed([
                        ROLES.AUTHOR,
                        ROLES.EDITOR,
                        ROLES.MANAGER,
                        ROLES.ADMIN,
                    ])}`}
                    to={`/${LINKS.COMMON}`}
                >
                    Common
                </Link>
                <Link
                    className={`link ${isLinkAllowed([
                        ROLES.EDITOR,
                        ROLES.MANAGER,
                        ROLES.ADMIN,
                    ])}`}
                    to={`/${LINKS.INTRANET}`}
                >
                    Intranet
                </Link>
                <Link
                    className={`link ${isLinkAllowed([ROLES.EDITOR])}`}
                    to={`/${LINKS.EDITOR}`}
                >
                    Editor
                </Link>
                <Link
                    className={`link ${isLinkAllowed([ROLES.MANAGER])}`}
                    to={`/${LINKS.MANAGER}`}
                >
                    Management
                </Link>
                <Link
                    className={`link ${isLinkAllowed([ROLES.ADMIN])}`}
                    to={`/${LINKS.ADMIN}`}
                >
                    Admin
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
