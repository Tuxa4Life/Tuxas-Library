import React from "react";
import Books from "./Books";
import { popular, georgian, math } from '../Assets/HomeLists'

const Home = () => {

    return (
        <div className="home-container">
            <h1>პოპულარულები:</h1>
            <Books bookList={popular}/>
            <hr />
            <h1>სასკოლო ქართული ენა და ლიტერატურა:</h1>
            <Books bookList={georgian} />
            <hr />
            <h1>მათემატიკის ამოცანათა კრებული:</h1>
            <Books bookList={math} />
        </div>
    )
}

export default Home;