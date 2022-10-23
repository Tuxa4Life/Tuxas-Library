import React, { useState } from "react";

const SearchBar = () => {
    const [term, setTerm] = useState('')

    return (
        <div className="ui action input" style={{width: '300px'}}>
            <input type="text" placeholder="Search book" onChange={e => setTerm(e.target.value)} value={term}/>
            <button className="ui icon button">
                <i className="search icon"></i>
            </button>
        </div>
    )
}

export default SearchBar;