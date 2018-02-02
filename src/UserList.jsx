import './UserList.css';
import React from 'react';

export default function UserList(props) {
    return (
        <ul className={'klikafm-user-list'}>
            {props.users.map((user, i) => {
                return (
                    <li className={'klikafm-user-list-item'} key={`user-${i}`}>{user}</li>
                );
            })}
        </ul>
    );
}
