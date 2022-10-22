import React from "react";

const BookCard = ({title, desc, imgLink, bookId}) => {

    return (
        <div className="ui card" style={{margin: '7px'}}>
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
                <a className="ui button  right floated" target={'_blank'} href={`https://drive.google.com/file/d/${bookId}/view?usp=sharing`}>Open</a>
                <a className="ui button green right floated" href={`https://drive.google.com/uc?id=${bookId}&export=download`}>Download</a>
            </div>
        </div>
    )
}

export default BookCard;