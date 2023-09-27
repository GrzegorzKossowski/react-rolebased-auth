import React, { Suspense } from 'react';
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import { ROLES } from '../types';
import RequireAuth from '../components/RequireAuth';
import { LINKS } from '../config/constants';
import LoginPage from '../pages/LoginPage';
import PublicPage from '../pages/PublicPage';

const CommonPage = React.lazy(() => import('../pages/CommonPage'));
const IntranetPage = React.lazy(() => import('../pages/IntranetPage'));
const AdminPage = React.lazy(() => import('../pages/AdminPage'));
const EditorPage = React.lazy(() => import('../pages/EditorPage'));
const ManagerPage = React.lazy(() => import('../pages/ManagerPage'));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index={true} element={<PublicPage />} />
            <Route path={LINKS.LOGIN} element={<LoginPage />} />
            <Route path={LINKS.REGISTER} element={<>RegisterPage</>} />
            <Route path={LINKS.UNAUTHORIZED} element={<>Unauthorized</>} />

            {/* private paths */}
            <Route
                element={
                    <RequireAuth
                        allowedRoles={[
                            ROLES.AUTHOR,
                            ROLES.EDITOR,
                            ROLES.MANAGER,
                            ROLES.ADMIN,
                        ]}
                    />
                }
            >
                <Route
                    path={LINKS.COMMON}
                    element={
                        <Suspense
                            fallback={<>Loading...</>}
                            children={<CommonPage />}
                        />
                    }
                />
            </Route>
            <Route
                element={
                    <RequireAuth
                        allowedRoles={[
                            ROLES.EDITOR,
                            ROLES.MANAGER,
                            ROLES.ADMIN,
                        ]}
                    />
                }
            >
                <Route
                    path={LINKS.INTRANET}
                    element={
                        <Suspense
                            fallback={<>Loading...</>}
                            children={<IntranetPage />}
                        />
                    }
                />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR]} />}>
                <Route
                    path={LINKS.EDITOR}
                    // lazy={() => import('../pages/EditorPage')}
                    element={
                        <Suspense
                            fallback={<>Loading...</>}
                            children={<EditorPage />}
                        />
                    }
                />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.MANAGER]} />}>
                <Route
                    path={LINKS.MANAGER}
                    element={
                        <Suspense
                            fallback={<>Loading...</>}
                            children={<ManagerPage />}
                        />
                    }
                />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                <Route
                    path={LINKS.ADMIN}
                    element={
                        <Suspense
                            fallback={<>Loading...</>}
                            children={<AdminPage />}
                        />
                    }
                />
            </Route>

            <Route path='*' element={<>Missing</>} />
        </Route>
    )
);
