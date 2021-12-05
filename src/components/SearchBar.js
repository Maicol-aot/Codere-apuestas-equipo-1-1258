import React from 'react';

const SearchBar = () =>{
    return(
        <>
            <link href="/assets/css/adminSearch.css" rel="stylesheet"/>
            <div className="search-bar2">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
                <input className="search_input" type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
            </div>
        </>
    );
};

export default SearchBar;