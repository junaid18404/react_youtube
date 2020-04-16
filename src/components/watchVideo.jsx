import React from 'react';
import VideoPlayer from "./videoPlayer";

export default function WatchVideo(props) {
    return (
        <div id='watch-video'>
            <VideoPlayer videoId={props.videoId}/>
        </div>
    );
}
