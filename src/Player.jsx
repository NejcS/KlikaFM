import React from 'react';
import YouTube from 'react-youtube';

export default class Player extends React.Component {
    render() {
    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };
debugger;
    return (
        <YouTube
            videoId={this.props.songID || '2g811Eo7K8U'}
            opts={opts}
        />
    );
    }
}
