import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Component = () => {
    return <div>Login Public Page</div>;
};

Component.displayName = 'LoginPage';

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
