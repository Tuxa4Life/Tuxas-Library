import React from "react";

const SearchBar = ({term, setTerm, search}) => {
    return (
        <div className="ui action input" style={{width: '300px'}}>
            <input type="text" placeholder="მოძებნეთ წიგნი" onChange={e => setTerm(e.target.value)} value={term}/>
            <button className="ui icon button" onClick={search}>
                <i className="search icon"></i>
            </button>
        </div>
    )
}

export default SearchBar;