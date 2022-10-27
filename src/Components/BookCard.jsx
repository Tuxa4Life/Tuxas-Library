import React, { useState } from "react";

const BookCard = ({title, desc, imgLink, bookId}) => {
    const [bookmarkLogo, setBookmarkLogo] = useState(false)
    
    const bookmark = () => {
        if (localStorage.getItem('bookmarks')) {
            let tmp = JSON.parse(localStorage.getItem('bookmarks'))
            let exists = false
            let index = null

            tmp.map((e, i) => {
                if (e.id == bookId) {
                    index = i
                    exists = true
                    return
                }
            })
            if (exists) {
                setBookmarkLogo(true)
                tmp.splice(index, 1)
                localStorage.setItem('bookmarks', JSON.stringify(tmp))
            } else {
                setBookmarkLogo(false)
                tmp.unshift({name: title, desc: desc, id: bookId})
                localStorage.setItem('bookmarks', JSON.stringify(tmp))
            }
        } else {
            let tmp = [{name: title, desc: desc, id: bookId}]
            localStorage.setItem('bookmarks', JSON.stringify(tmp))
        }
    }

    const downloadRedirect = () => {
        if (localStorage.getItem('login')) {
            window.location.href = `https://drive.google.com/uc?id=${bookId}&export=download`
        } else {
            alert('გადმოსაწერად გთხოვთ დარეგისტრირდეთ ;-;')
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
                <button className={`ui button icon ${ bookmarkLogo ? '' : 'pink' }`} onClick={bookmark}>
                    <i className="icon bookmark"></i>
                </button>
                <a className="ui button right floated" target={'_blank'} href={`https://drive.google.com/file/d/${bookId}/view?usp=sharing`}>გახსნა</a>
                <button className="ui button icon green right floated" onClick={downloadRedirect}><i className="icon download"></i></button>
            </div>
        </div>
    )
}

export default BookCard;