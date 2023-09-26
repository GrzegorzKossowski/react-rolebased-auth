import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const Component = () => {
    return (
        <section>
            <p className='text-4xl'>
                Welcome to our main page. Access to nie j is available to all,
                entering the main domain of the application. We recommend using
                the menu on the left side of the screen.
            </p>
        </section>
    );
};

Component.displayName = 'PublicPage';

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
