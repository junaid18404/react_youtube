import React from 'react';

export default function VideoItem(props) {
    const { title, thumbnails } = props.videoItemDetails.snippet;

    const playVideo = () => {
        console.log(props.videoItemDetails);
        props.playVideo(props.videoItemDetails.id.videoId)
    };

    const imageStyle = {
        width: "210px",
        height: "140px"
    };
    return (
        <div id='video-item' onClick={() => playVideo()}>
            <div className="card">
                <div className="card-body">
                    <img src={thumbnails.high.url} alt="Video Img" style={imageStyle}/>
                    <b className="card-title">{title.slice(0,40)}</b>
                </div>
            </div>
        </div>
    );
}
