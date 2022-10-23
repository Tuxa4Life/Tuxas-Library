import React, {useState} from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Route from './Components/Route';
import MainForm from "./Components/Forms/MainForm";
import GoogleForm from "./Components/Forms/GoogleForm";
import FacebookForm from "./Components/Forms/FacebookForm";
import Books from "./Components/Books";
import styles from './Assets/Styles/home.css'
import MainLibraryPage from "./Components/MainLibraryPage";

const App = () => {
    const [bookList, setBookList] = useState([])
    const [popularList, setPopularList] = useState([
        {;l;okjhyh
            name: 'ფეხისტყაოსანი',
            desc: 'შოთა რუსთაველი',
            id: '1cjM3_dC-iS6yTxTV0Q-aiJmCRnLVjumT',
            imgLink: 'https://server5.intermedia.ge/pictures/medium/570/570115.jpg?/Shota-Rustaveli-Georgian-poet.jpg'
        },
        {
            name: 'შუშანიკის წამება',
            desc: 'იაკობ ცურტაველი',
            id: '1PsKbKEdpxWjsDdl4_yjl56T-5e2-9ybb',
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Sabinin._St._Shushanik.jpg'
        },
        {
            name: 'დიდოსტატის კონსტანტინეს მარჯვენა',
            desc: 'კონსტანტინე გამსახურდია',
            id: '1KGcXOwTQzEQBpq1O9MP6RIo8AtRMFgWu',
            imgLink: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386421153l/9754154.jpg'
        },
        {
            name: 'ჯაყოს ხიზნები',
            desc: 'მიხეილ ჯავახისვილი',
            id: '1DkJ9IKsOUzNKBqpeNOvxEVfyb3UgOgbN',
            imgLink: 'https://upload.wikimedia.org/wikipedia/ka/thumb/3/33/Jayos_xiznebi_1.jpg/220px-Jayos_xiznebi_1.jpg'
        },
    ])

    return (
        <div style={styles} className="container">
            <Route path='/'>
                <Navbar />
                <div className="home-container">
                    <h1>პოპულარულები:</h1>
                    <Books bookList={popularList}/>
                    <hr />
                </div>
            </Route>
            <Route path='/books'>
                <Navbar />
                <MainLibraryPage setBooks={setBookList} books={bookList}/>
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