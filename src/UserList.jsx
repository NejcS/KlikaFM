import './UserList.css';
import React from 'react';
import VinylSVG from './Vinyl.jsx';

export default function UserList(props) {
    return (
        <div className={'user-list'}>
            <div className={'title'}>Users</div>
            <ul className={'users'}>
                {props.users.map((user, i) => {
                    return (
                        <li className={'user'} key={`user-${i}`}>
                            <VinylSVG className={'vinyl'} type={Math.random() > 0.5 ? 'gold' : 'platinum'} />
                            {user}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
