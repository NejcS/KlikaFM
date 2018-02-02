import React, { Component } from 'react';
import './App.css';
import openSocket from 'socket.io-client';
import LoginForm from './LoginForm';
import UserList from './UserList';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            loggedIn: false
        };
    }

    onLoginFormSubmit = (username) => {
        if (!username) return;
        this.socket = openSocket('http://localhost:8000');
        this.socket.emit('login', { username: username })

        this.socket.on('users:list', data => {
            this.setState({
                users: JSON.parse(data),
                loggedIn: true
            });
        });
    };

    render() {
        return (
            <div className="App">
                {!this.state.loggedIn &&
                    <LoginForm onSubmit={this.onLoginFormSubmit} />
                }
                {this.state.loggedIn &&
                    <UserList users={this.state.users} />
                }
            </div>
        );
    }
}
