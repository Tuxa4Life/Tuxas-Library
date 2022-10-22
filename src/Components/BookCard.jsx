import React from "react";

const BookCard = ({title, desc, imgLink, bookId}) => {
    
    const bookmark = () => {
        if (localStorage.getItem('bookmarks')) {
            let tmp = JSON.parse(localStorage.getItem('bookmarks'))
            tmp.unshift({title: title, desc: desc, imgLink: imgLink, bookId: bookId})
            localStorage.setItem('bookmarks', JSON.stringify(tmp))
        } else {
            let tmp = [{title: title, desc: desc, imgLink: imgLink, bookId: bookId}]
            localStorage.setItem('bookmarks', JSON.stringify(tmp))
        }
    }

    return (
        <div className="ui card book-card" style={{margin: '7px'}}>
            <div className="image">
                <img src={imgLink} />
            </div>
            <div className="content">
                <a className="header">{title}</a>
                <div className="description">
                    {desc}
                </div>
            </div>
            <div className="extra content">
                <button className="ui button icon pink" onClick={bookmark}>
                    <i className="icon bookmark"></i>
                </button>
                <a className="ui button right floated" target={'_blank'} href={`https://drive.google.com/file/d/${bookId}/view?usp=sharing`}>Open</a>
                <a className="ui button green right floated" href={`https://drive.google.com/uc?id=${bookId}&export=download`}>Download</a>
            </div>
        </div>
    )
}

export default BookCard;