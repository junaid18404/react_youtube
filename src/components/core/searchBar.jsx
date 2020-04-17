import React, { useState }from "react";

export default function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('');

    const searchVideos = () => {
        props.searchFormVideos(searchValue);
    };
    const inputStyle = {
        width: '50%'
    };

    return (
        <div id='search-bar' className='input-group mb-3 text-center'>
            <input id='video-search-input' className='form-control' type='text'
                   placeholder='Search videos...' style={inputStyle}
                   name='video-search' value={searchValue}
                   onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className='input-group-append'>
                <button className='btn btn-md btn-light' name='video-search' onClick={() => searchVideos()}>Search</button>
            </div>
        </div>
    );
}