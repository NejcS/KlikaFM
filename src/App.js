import React, { Component } from 'react';
import './App.css';
import openSocket from 'socket.io-client';
import LoginForm from './LoginForm';
import UserList from './UserList';
import Player from './Player';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            loggedIn: false,
            songURL: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.songURL === nextState.songURL;  // ignore this case
    }

    onLoginFormSubmit = (username) => {
        if (!username) return;
        this.socket = openSocket('http://localhost:8000');
        this.socket.emit('login', { username: username })

        this.socket.on('users:list', users => {
            this.setState({
                users: JSON.parse(users),
                loggedIn: true
            });
        });

        this.socket.on('addSong', songURL => {
            this.setState({ songURL: songURL });
        });

        document.addEventListener('keydown', this.onKeyDown);
    };

    onSongInputChange = (e) => {
        this.setState({
            songURL: e.target.value
        });
    };

    setSongInputElement = (ref) => {
        this.songInputElement = ref;
    };

    addSong = (e) => {
        // add check if it is a URL and that it points to youtube ...
        this.socket.emit('addSong', { url: this.state.songURL });
    };

    onKeyDown = (e) => {
        if (e && (e.key === 'Enter' || e.keyCode === 13) &&
            document.activeElement === this.songInputElement) {
            this.addSong();
        }
    };

    render() {
        return (
            <div className="klikafm">
                {!this.state.loggedIn &&
                    <LoginForm onSubmit={this.onLoginFormSubmit} />
                }
                {this.state.loggedIn && 
                    <div className={'klikafm-grid'}>
                        <div className={'klikafm-grid-item klikafm-user-list'}>
                            <UserList key="a1" users={this.state.users} />
                        </div>
                        <div className={'klikafm-grid-item klikafm-search'}>
                            <Search onSongInputChange={this.onSongInputChange} setSongInputElement={this.setSongInputElement} />
                        </div>
                        <div className={'klikafm-grid-item klikafm-button'} onClick={this.addSong}></div>
                        <div className={'klikafm-grid-item klikafm-player'}>
                            <Player key="a2" />
                        </div>
                        <div className={'klikafm-grid-item klikafm-queue'}></div>
                    </div>
                }
            </div>
        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <input
                onChange={this.props.onSongInputChange}
                ref={this.props.setSongInputElement}
                className="search-bar"
                type="text"
                autoFocus
                placeholder="Youtube link goes here"
            />
        );
    }
}
