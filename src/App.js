import React from 'react';
import './App.css';
import SearchBar from "./components/searchBar";

function App() {
    const searchVideos = (searchValue) => {

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
