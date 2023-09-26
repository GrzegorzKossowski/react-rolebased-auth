import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Component = () => {
    return <section>IntranetPage Editor, Manager, Admin</section>;
};

Component.displayName = 'IntranetPage';

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
