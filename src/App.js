import React, {useState} from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import YoutubeService from "./services/youtubeService";
import VideosList from "./components/videosList";

function App() {
    const [videosList, setVideosList] = useState([]);

    const searchVideos = async (searchValue) => {
        const searchQueryResponse = await new YoutubeService().getVideosByQuery(searchValue);
        const videosList = extractVideosListFromResponse(searchQueryResponse);
        setVideosList(videosList);
    };

    const extractVideosListFromResponse = (rawData) => {
        return rawData['data']['items']
    };

    return (
        <div className="App container">
            <header>
                <h1>Youtube</h1>
            </header>
            <SearchBar searchFormVideos={(searchValue) => searchVideos(searchValue)}/>
            <br/>
            <br/>
            {videosList.length > 0 && <VideosList videoslist={videosList}/>}
        </div>
    );
}

export default App;
