import React, {Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Home from './Components/Home';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/create' element={<Create/>}/>
                    <Route path='/read/:id' element={<Read/>}/>
                    <Route path='/update/:id' element={<Update/>}/>
                </Routes>
            </Router>
        </Fragment>
    )
}

export default App;
