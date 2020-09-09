import React, { useEffect } from 'react';
import getUsers from '../api/getUsers';
import { useDispatch, useSelector } from 'react-redux';
import { findStarted, findSuccess, selectIsLoading } from '../redux/users/usersSlice';
import UsersTable from './UsersTable';

const UsersList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const fetchData = async () => {
        dispatch(findStarted());
        const data = await getUsers();
        console.log(data);
        dispatch(findSuccess(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    // 1 - isLoading = false y usersList = undefined
    // 2 - isLoading = true y usersList = undefined
    // 3 - isLoading = false y usersList != undefined

    return (
        <div>
            <h1>Users</h1>

            {isLoading && <p>Loading</p>}

            {!isLoading && <UsersTable/>}
        </div>
    );

}

export default UsersList;