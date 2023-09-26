import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import { ROLES } from '../types';
import RequireAuth from '../components/RequireAuth';
import { LINKS } from '../config/constants';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index={true} lazy={() => import('../pages/PublicPage')} />
            <Route
                path={LINKS.LOGIN}
                lazy={() => import('../pages/LoginPage')}
            />
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
                    lazy={() => import('../pages/CommonPage')}
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
                    lazy={() => import('../pages/IntranetPage')}
                />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR]} />}>
                <Route
                    path={LINKS.EDITOR}
                    lazy={() => import('../pages/EditorPage')}
                />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.MANAGER]} />}>
                <Route
                    path={LINKS.MANAGER}
                    lazy={() => import('../pages/ManagerPage')}
                />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                <Route
                    path={LINKS.ADMIN}
                    lazy={() => import('../pages/AdminPage')}
                />
            </Route>

            <Route path='*' element={<>Missing</>} />
        </Route>
    )
);
