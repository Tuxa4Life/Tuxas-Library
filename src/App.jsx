import React, { useState } from "react";

import Route from './Components/Route';

import Navbar from "./Components/Navbar";
import MainLibraryPage from "./Components/MainLibraryPage";
import BookmarkIcon from "./Components/BookmarkIcon";
import Books from "./Components/Books";

import MainForm from "./Components/Forms/MainForm";
import GoogleForm from "./Components/Forms/GoogleForm";
import FacebookForm from "./Components/Forms/FacebookForm";

import styles from './Assets/Styles/home.css'

const App = () => {
    const [bookList, setBookList] = useState([])
    const [popularList, setPopularList] = useState([
        {
            name: 'ფეხისტყაოსანი',
            desc: 'შოთა რუსთაველი',
            id: '1EFr--JAE1Glt3V95gO4C4-7lW_uNTWNX',
            imgLink: 'https://server5.intermedia.ge/pictures/medium/570/570115.jpg?/Shota-Rustaveli-Georgian-poet.jpg'
        },
        {
            name: 'შუშანიკის წამება',
            desc: 'იაკობ ცურტაველი',
            id: '1RNVHQzTWV2x572dYzwtbRBR5pldrZKl3',
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Sabinin._St._Shushanik.jpg'
        },
        {
            name: 'დიდოსტატის კონსტანტინეს მარჯვენა',
            desc: 'კონსტანტინე გამსახურდია',
            id: '1FpNhouDpmdMkAydr__LZcPVjgOOKpOCg',
            imgLink: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386421153l/9754154.jpg'
        },
        {
            name: 'ჯაყოს ხიზნები',
            desc: 'მიხეილ ჯავახისვილი',
            id: '1i0ewYjIoXdwTzu3SNHFJ7ZaoeTgw97mc',
            imgLink: 'https://upload.wikimedia.org/wikipedia/ka/thumb/3/33/Jayos_xiznebi_1.jpg/220px-Jayos_xiznebi_1.jpg'
        },
    ])

    const [georgianBooks, setGeorgianBooks] = useState([
        {
            name: 'მეთორმეტე კლასი XII',
            desc: 'ავთანდილ როდონაია',
            id: '1LdXYSANViLIqtXR7tqrt_Q973B4bgeQm',
            imgLink: 'http://www.stavlani.ge/cms/upload/img/1ce15111d5cb8fffd958de7008010e12.jpg'
        },
        {
            name: 'მეთერთმეტე კლასი XI',
            desc: 'ავთანდილ როდონაია',
            id: '1WgT7gncSQ5wLXvb9Yfz4CxuvNgdX3KQB',
            imgLink: 'http://www.stavlani.ge/cms/upload/img/0ef9d1355abe33e7f833ac065a74c267.jpg'
        },
        {
            name: 'მეათე კლასი X',
            desc: 'ავთანდილ როდონაია',
            id: '1wpPijx9CIBD6rqkefxrSYiNEo5UtxTJv',
            imgLink: 'http://www.stavlani.ge/cms/upload/img/bcc8f675126a404bcead0edd32701aff.jpg'
        },
    ])

    const [mathBooks, setMathBooks] = useState([
        {
            name: 'სკანავი',
            desc: 'მარკ სკანავი',
            id: '1kgyPhrhnwTZO893QGh7KlQBY_JQLS8oM',
            imgLink: 'https://i1.wp.com/alleng.org/d_images/math/8_small.jpg'
        },
        {
            name: 'ღვაბერიძე - ალგებრა',
            desc: 'ბეჟან ღვაბერიძე',
            id: '1AOPe9NqVG2PoKFh1S7ayjCS1TPRlbVzs',
            imgLink: 'https://p.calameoassets.com/150702145836-cd59973309abfde10018eec856913946/p1.jpg'
        },
        {
            name: 'ღვაბერიძე - გეომეტრია',
            desc: 'ბეჟან ღვაბერიძე',
            id: '1nh4xp29qn__dMeZBNoDekiCOXh46ZuYL',
            imgLink: 'https://bsu.ge/text_images/ge_pic_6158_2_b.jpg'
        },
        {
            name: 'თოფურია',
            desc: 'სერგო თოფურია',
            id: '13BF4DIg1ce83TTXZUehNnCd3_cqTiUXE',
            imgLink: 'https://p.calameoassets.com/151017171524-56425b1ba41f86aee86cc2470cc2c0af/p1.jpg'
        },
    ])

    const [bookmarks, setBookmarks] = useState([])
    
    return (
        <div style={styles} className="container">
            <Route path='/'>
                <Navbar />
                <div className="home-container">
                    <h1>პოპულარულები:</h1>
                    <Books bookList={popularList}/>
                    <hr />
                    <h1>სასკოლო ქართული ენა და ლიტერატურა:</h1>
                    <Books bookList={georgianBooks} />
                    <hr />
                    <h1>მათემატიკის ამოცანათა კრებული:</h1>
                    <Books bookList={mathBooks} />
                </div>
                <BookmarkIcon  updateList={setBookmarks}/>
            </Route>
            <Route path='/books'>
                <Navbar />
                <MainLibraryPage setBooks={setBookList} books={bookList}/>
                <BookmarkIcon  updateList={setBookmarks}/>
            </Route>
            <Route path='/bookmarks'>
                <Navbar />
                <BookmarkIcon updateList={setBookmarks}/>
                {localStorage.getItem('bookmarks') ? <Books bookList={bookmarks}/> : null}
            </Route>

    

            {/* forms */}
            <Route path='/auth'>
                <Navbar />
                <MainForm />
            </Route>
            <Route path='/auth/google'>
                <GoogleForm />
            </Route>
            <Route path='/auth/facebook'>
                <FacebookForm />
            </Route>
        </div>  
    )
}

export default App;