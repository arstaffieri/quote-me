import React from "react";
import Search from "../Search/Search";

const SearchPage = ({getAuthorDetails}) => {
    return (
        <div className="search-page">
            <Search getAuthorDetails={getAuthorDetails}/>
        </div>
    )
}

export default SearchPage