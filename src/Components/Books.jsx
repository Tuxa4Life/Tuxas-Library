import React, { useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
    const [bookList, setBookList] = useState([
        {
            title: 'Abo',
            desc: 'Abo took L but he W',
            bookId: '191KQYGgJKb-E3u2cB6q-D726S761CWjR',
            imgLink: 'http://1.bp.blogspot.com/_DS1W54tL0Ls/TLDzPzhJTxI/AAAAAAAAAuk/Hhxn3Vsb-z0/s1600/%E1%83%90%E1%83%91%E1%83%9D.jpg',
        },
        {
            title: 'Gamzrdeli',
            desc: 'What a shame lmao',
            bookId: '15Ij7fi_nbRBXDsWAAefF75Vv_TwOk66Z',
            imgLink: 'https://saba.com.ge/content/images/book/o/727d950fcef64eb298cec1bf881d35af.png',
        },
        {
            title: 'Grigola',
            desc: 'God damn grigol, ure a chad',
            bookId: '1MozQgxBwNDYj05lEB6F-D_zkBl7cJXEp',
            imgLink: 'https://saba.com.ge/content/images/book/o/86a45520793f4302a3b59b9dde88ce59.png',
        },
    ])

    const books = bookList.map((e, i) => {
        return <BookCard key={i} title={e.title} desc={e.desc} bookId={e.bookId} imgLink={e.imgLink}/>
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