import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
};

export default App;