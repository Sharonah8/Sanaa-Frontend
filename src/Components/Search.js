import React from "react";
import "../Styles/Search.css";

function Search({change}) {
  return (
    <div>
      <div className="searchBox">
      <input
        type="search"
        className="search-bar"
        placeholder="Search Art...."
        onChange={change}
      /> </div>
    </div>
    
  );
}

export default Search;