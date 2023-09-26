import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Component = () => {
    return <section>Common Page Author, Editor, Manager, Admin</section>;
};

Component.displayName = 'CommonPage';

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