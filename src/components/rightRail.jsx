import React from 'react';
import VideoItem from "./videoItem";

export default function RightRail(props) {
    return (
        <div id='right-rail'>
            {props.videosList.map((videoItemData,index) =>
                <VideoItem
                    key={index}
                    videoItemDetails={videoItemData}
                    playVideo={props.playVideo}
                />)}
        </div>
    );
}