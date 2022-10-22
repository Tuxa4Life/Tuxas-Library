import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const Books = () => {
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://v1.nocodeapi.com/tuxa7/drive/bvUmoUzFruklxFSI/listFiles', 
            params: {},
        }).then(function (response) {
            setBookList(response.data.files)
            console.log(response.data.files);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])

    const books = bookList.map((e, i) => {
        return <BookCard key={i} title={e.name} desc={e.desc} bookId={e.id} imgLink={e.imgLink}/>
    })

    return (
        <div className="ui cards" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            
            { books }
            
        </div>
    )
}

export default Books;