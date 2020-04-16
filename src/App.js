import React from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import YoutubeService from "./services/youtubeService";

function App() {
    const searchVideos = async (searchValue) => {
        const searchQueryResponse = await new YoutubeService().getVideosByQuery(searchValue);
        console.log(extractVideosListFromResponse(searchQueryResponse));
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
        </div>
    );
}

export default App;
