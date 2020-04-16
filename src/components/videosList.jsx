import React from "react";
import VideoItem from "./videoItem";

export default function VideosList(props) {
    return (
        <div className='row'>
            {props.videoslist.map((videoItemData,index) => <div className='col-3' key={index}><VideoItem
                videoItemDetails={videoItemData}/></div>)}
        </div>
    );
}