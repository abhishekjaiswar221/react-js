import React from "react";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import PlaceOrder from "./Components/PlaceOrder";
import PageNotFound from "./Components/PageNotFound";
import Products from "./Products/Products";
import Featured from "./Products/Featured";
import NewProducts from "./Products/NewProducts";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/order" element={<PlaceOrder/>}/>
                <Route path={"/products"} element={<Products/>}>
                    <Route index element={<Featured/>}/>
                    <Route path={"featured"} element={<Featured/>}/>
                    <Route path={"new-products"} element={<NewProducts/>}/>
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
};

export default App;
