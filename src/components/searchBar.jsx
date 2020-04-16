import React, { useState }from "react";

export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('');

    const searchVideos = () => {
        props.searchFormVideos(searchValue);
    };

    return (
        <div id='search-bar'>
            <form className='form-inline' onSubmit={(event) => event.preventDefault() }>
                <div className='form-group'>
                    <label id='video-search-label' htmlFor='video-search'>Video search</label>
                    <input id='video-search-input' className='form-control' type='text' placeholder='Search videos...'
                           name='video-search' value={searchValue}
                           onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>
                <button className='btn btn-md btn-light' name='video-search' onClick={() => searchVideos()}>Search</button>
            </form>
        </div>
    );
}