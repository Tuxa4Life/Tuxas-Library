import React from "react";
import Navbar from "./Components/Navbar";
import Route from './Components/Route';
import MainForm from "./Components/Forms/MainForm";
import GoogleForm from "./Components/Forms/GoogleForm";
import FacebookForm from "./Components/Forms/FacebookForm";

const App = () => {
    return (
        <div className="container">
            <Route path='/'>
                <Navbar />
                Hello Home
            </Route>
            <Route path='/books'>
                <Navbar />
                Hello Books
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