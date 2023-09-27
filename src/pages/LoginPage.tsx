import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../store/slices/apiUsersSlice';
import { AuthType } from '../types';
import useAuth from '../hooks/useAuth';

export const LoginPage = () => {
    const { setAuth } = useAuth() as AuthType;
    const [selectedUserId, setSelectedUserId] = useState('');
    const [errMsg, setErrMsg] = useState<string>('');
    const { data: users, isLoading, isError } = useGetUsersQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedUserId !== '') setErrMsg('');
    }, [selectedUserId]);

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedUserId(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (selectedUserId === '') {
            setErrMsg('Select email (role)');
            return;
        }
        const currentUser = users?.find(user => selectedUserId === user.id);
        setAuth({ ...currentUser });
        navigate('/common');
    }

    if (isError) return <ErrorMessage />;
    if (isLoading) return <>Loading...</>;
    return (
        <>
            <h1 className='text-4xl mb-4'>Login Public Page</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor=''>Email</label>
                    <select
                        className='min-w-[200px] p-2'
                        onChange={handleSelect}
                        value={selectedUserId}
                    >
                        <option value=''></option>
                        {users?.length &&
                            users.map(user => (
                                <option value={user.id} key={user.id}>
                                    {user.email} - {user.first_name}{' '}
                                    {user.last_name}
                                </option>
                            ))}
                    </select>
                </div>
                <span className='block'>{errMsg}</span>

                <button className='btn px-4 py-2 bg-slate-600 text-slate-200'>
                    Login
                </button>
            </form>
        </>
    );
};

const ErrorMessage = () => (
    <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-red-500'>Error</h1>
        <p className='text-xl'>
            This login page is for testing purposes only. The page retrieves
            test users from a JSON database.
        </p>
        <p className='text-xl'>
            If an error occurs, the list of users that can be logged in cannot
            be loaded.
        </p>
        <p className='text-xl'>
            Start the JSON server so that the application can work properly.
            <br />
            <code className='bg-slate-200 py-2 w-full'>npm run dev</code>
        </p>
    </div>
);

export default LoginPage;
