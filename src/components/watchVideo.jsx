import React from 'react';
import VideoPlayer from "./videoPlayer";
import RightRail from "./rightRail";
import VideoDetails from "./videoDetails";

export default function WatchVideo(props) {
    const { videosList, videoDetails } = props;

    return (
        <div id='watch-video'>
            <div className='row'>
                <div className='col-9'>
                    <VideoPlayer videoId={videoDetails.id.videoId}/>
                    <VideoDetails videoDetails={videoDetails}/>
                </div>
                <div className='col-3'>
                    <RightRail playVideo={props.playVideo} videosList={videosList}/>
                </div>
            </div>
        </div>
    );
}
