import React, { useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import styles from '../Assets/Styles/MainLibrary.css'

const MainLibraryPage = ({books, setBooks}) => {

    useEffect(() => {
        if (!books.length) {
            axios({
                method: 'get',
                url: 'https://v1.nocodeapi.com/tuxa7/drive/bvUmoUzFruklxFSI/listFiles', 
                params: {},
            }).then(function (response) {
                setBooks(response.data.files)
                console.log(response.data.files);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }, [])

    return (
        <div style={styles} className="library-container">
            <Books bookList={books}/>
        </div>
    )
}

export default MainLibraryPage;