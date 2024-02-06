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
import User from "./Users/User";
import DisplayUserDetails from "./Users/DisplayUserDetails";
import Admin from "./Users/Admin";
import DemoRoute from "./DemoRoute";

const App = () => {
    return (
        <>
            <Navbar/>
            <DemoRoute/>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Home/>}/>*/}
            {/*    <Route path="/contact-us" element={<ContactUs/>}/>*/}
            {/*    <Route path="/about" element={<About/>}/>*/}
            {/*    <Route path="/order" element={<PlaceOrder/>}/>*/}
            {/*    <Route path={"/products"} element={<Products/>}>*/}
            {/*        <Route index element={<Featured/>}/>*/}
            {/*        <Route path={"featured"} element={<Featured/>}/>*/}
            {/*        <Route path={"new-products"} element={<NewProducts/>}/>*/}
            {/*    </Route>*/}
            {/*    <Route path={"/users"} element={<User/>}>*/}
            {/*        <Route path={":userId"} element={<DisplayUserDetails/>}/>*/}
            {/*        <Route path={"admin"} element={<Admin/>}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="*" element={<PageNotFound/>}/>*/}
            {/*</Routes>*/}
        </>
    );
};

export default App;
