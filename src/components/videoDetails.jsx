import React from 'react';
import DateHelpers from "../helpers/dateHelpers";

export default function VideoDetails(props) {
    const {title, description, channelTitle, channelId, publishedAt} = props.videoDetails.snippet;

    return (
        <div id='video-details' className='text-left'>
            <h4>{title}</h4>
            <small>Published at: {DateHelpers.getFormattedDate(publishedAt, DateHelpers.DEFAULT_DATE_FORMAT)}</small>
            <h6>Video by: <a href={'https://www.youtube.com/channel/'+ channelId} target='_blank'>{channelTitle}</a></h6>
            <p>{description}</p>
        </div>
    );
}