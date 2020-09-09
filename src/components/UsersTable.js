import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsersList } from '../redux/users/usersSlice';

const UsersTable = () => {
    const usersList = useSelector(selectUsersList);

    return (
        <div>
            <ul>
                {usersList.map((user, index) => {
                    return <li key={`user-${index}`}>{user.first_name}</li>
                })}
            </ul>
        </div>
    );
}

export default UsersTable;