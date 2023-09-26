import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Component = () => {
    return (
        <section>
            <p className='text-4xl'>
                Welcome to ADMIN page. Access is available to Admin role.
            </p>
        </section>
    );
};

Component.displayName = 'AdminPage';

export function ErrorBoundary() {
    let error = useRouteError();
    return isRouteErrorResponse(error) ? (
        <h1>
            {error.status} {error.statusText}
        </h1>
    ) : (
        <h1>Error</h1>
    );
}
