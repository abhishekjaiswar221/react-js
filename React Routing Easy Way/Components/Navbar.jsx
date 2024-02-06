import React from "react";
import {Link, NavLink} from "react-router-dom";
//NavLink is preferable, because it adds a class named "active" it can be used to style the link.
const Navbar = () => {
    const handelStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "underline",
        };
    };
    return (
        <section id="container">
            <NavLink to="/" style={handelStyle}>
                Home
            </NavLink>
            <NavLink to="/contact-us" style={handelStyle}>
                Contact Us
            </NavLink>
            <NavLink to="/about" style={handelStyle}>
                About
            </NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/users">Users</NavLink>
        </section>
    );
};

export default Navbar;
