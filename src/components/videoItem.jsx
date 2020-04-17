import React from 'react';
import DateHelpers from "../helpers/dateHelpers";

export default function VideoItem(props) {
    const { title, publishedAt, thumbnails } = props.videoItemDetails.snippet;

    const playVideo = () => {
        props.playVideo(props.videoItemDetails)
    };

    const imageStyle = {
        width: "100%",
        height: "20%"
    };
    const cardStyle = {
        cursor: 'pointer',
        marginBottom: '2%',
        marginRight: '2%',
    };
    return (
        <div id='video-item' onClick={() => playVideo()} style={cardStyle}>
            <div className="row">
                <img src={thumbnails.high.url} alt="Video Img" style={imageStyle}/>
            </div>
            <div className="row">
                <div className='text-left'>
                    <b className="card-title">{title.length > 40 ? `${title.slice(0,50)} ...` : title.slice(0,50)}</b>
                    <br/>
                    <small>{DateHelpers.getRelativeFormattedDate(publishedAt)}</small>
                </div>
            </div>
        </div>
    );
}
