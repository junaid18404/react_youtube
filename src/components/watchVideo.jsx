import React from 'react';
import VideoPlayer from "./videoPlayer";
import RightRail from "./rightRail";

export default function WatchVideo(props) {
    return (
        <div id='watch-video'>
            <div className='row'>
                <div className='col-9'>
                    <VideoPlayer videoId={props.videoId}/>
                </div>
                <div className='col-3'>
                    <RightRail videosList={props.videosList}/>
                </div>
            </div>
        </div>
    );
}
