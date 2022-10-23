import React from "react";

const BookmarkIcon = ({updateList}) => {
    return (
        <button style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            transform: 'translate(-50%, -50%)',
            border: '2px gray solid',
            zIndex: '1'
        }} className="circular teal ui icon button large" onClick={() => {
            updateList(JSON.parse(localStorage.getItem('bookmarks')))

            window.history.pushState({}, '', '/bookmarks')
            const navEvent = new PopStateEvent('popstate')
            window.dispatchEvent(navEvent)
        }}>
            <i className="icon bookmark"></i>
        </button>
    )
}

export default BookmarkIcon;