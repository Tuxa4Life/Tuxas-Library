import React, { useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import styles from '../Assets/Styles/MainLibrary.css'
import SearchBar from "./SearchBar";

const MainLibraryPage = ({books, setBooks}) => {
    const [term, setTerm] = useState('')
    const [tmpBooks, setTmpBooks] = useState([...books]) 

    useEffect(() => {
        if (!books.length) {
            axios({
                method: 'get',
                url: 'https://v1.nocodeapi.com/tuxaslibrary/google_sheets/wBfxtQySzxWltzpx?tabId=Sheet1',  // tuxaslibrary
                params: {},
            }).then(function (response) {
                setTmpBooks([...response.data.data])
                setBooks([...response.data.data])
            }).catch(function (error) {
                console.log(error);
            })
        }
    }, [])

    const search = () => {
        setTmpBooks([...books])
        let tmp = []
        books.map(e => {
            if (e.name.includes(term)) {
                tmp.push({name: e.name, id: e.id})
            }
        })
        setTmpBooks(tmp)
    }

    return (
        <div style={styles} className="library-container">
            <SearchBar term={term} setTerm={setTerm} search={search}/>
            <Books bookList={tmpBooks}/>
        </div>
    )
}

export default MainLibraryPage;