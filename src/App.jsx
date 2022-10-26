import React, { useState } from "react";

import Route from './Components/Route';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MainLibraryPage from "./Components/MainLibraryPage";
import BookmarkIcon from "./Components/BookmarkIcon";
import Books from "./Components/Books";

import MainForm from "./Components/Forms/MainForm";
import GoogleForm from "./Components/Forms/GoogleForm";
import FacebookForm from "./Components/Forms/FacebookForm";

import styles from './Assets/Styles/home.css'

const App = () => {
    const [bookList, setBookList] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    
    return (
        <div style={styles} className="container">
            <Route path='/'>
                <Navbar />
                <Home />
                <BookmarkIcon  updateList={setBookmarks}/>
            </Route>
            <Route path='/books'>
                <Navbar />
                <MainLibraryPage setBooks={setBookList} books={bookList}/>
                <BookmarkIcon  updateList={setBookmarks}/>
            </Route>
            <Route path='/bookmarks'>
                <Navbar />
                <BookmarkIcon updateList={setBookmarks}/>
                {localStorage.getItem('bookmarks') ? <Books bookList={bookmarks}/> : null}
            </Route>

    

            {/* forms */}
            <Route path='/auth'>
                <Navbar />
                <MainForm />
            </Route>
            <Route path='/auth/google'>
                <GoogleForm />
            </Route>
            <Route path='/auth/facebook'>
                <FacebookForm />
            </Route>
        </div>  
    )
}

export default App;