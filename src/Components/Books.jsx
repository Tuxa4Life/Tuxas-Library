import React from "react";
import BookCard from "./BookCard";

const Books = ({bookList}) => {

    const books = bookList.map((e, i) => {
        return <BookCard key={i} title={e.name} desc={e.desc} bookId={e.id} imgLink={e.imgLink}/>
    })

    return (
        <div className="ui cards" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '20px'
        }}>
            
            { books }
            
        </div>
    )
}

export default Books;