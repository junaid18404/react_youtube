import React from 'react';

export default function VideoPlayer(props) {
    const videoPlayerStyle = {
        width: '100%',
        height: '480px'
    };
    return (
        <div id='video-player'>
            <iframe src={'https://www.youtube.com/embed/' + props.videoId} frameBorder="0" style={videoPlayerStyle} allowFullScreen={true}/>
        </div>
    );
}
