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
                url: 'https://v1.nocodeapi.com/tuxa7/drive/vlnOAbuinqSaTMGt/listFiles',  // ***********7
                params: {},
            }).then(function (response) {
                setBooks(response.data.files)
                console.log(response.data.files);
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