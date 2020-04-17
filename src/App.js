import React, {useState} from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import YoutubeService from "./services/youtubeService";
import VideosList from "./components/videosList";
import WatchVideo from "./components/watchVideo";

function App() {
    const [videosList, setVideosList] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);

    const searchVideos = async (searchValue) => {
        const searchQueryResponse = await new YoutubeService().getVideosByQuery(searchValue);
        const videosList = extractVideosListFromResponse(searchQueryResponse);
        setVideosList(videosList);
        setVideoDetails(null)
    };

    const extractVideosListFromResponse = (rawData) => {
        return rawData['data']['items']
    };

    const playVideo = (videoDetails) => {
        setVideoDetails(videoDetails);
    };
    return (
        <div className="App container">
            <header>
                <h1>Youtube</h1>
            </header>
            <SearchBar searchFormVideos={(searchValue) => searchVideos(searchValue)}/>
            <br/>
            <br/>
            {videosList.length > 0 && videoDetails === null && <VideosList playVideo={playVideo} videoslist={videosList}/>}
            {videosList.length > 0 && videoDetails !== null && <WatchVideo videoDetails={videoDetails} playVideo={playVideo} videosList={videosList}/>}
        </div>
    );
}

export default App;
