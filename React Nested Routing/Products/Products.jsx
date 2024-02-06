import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Products = () => {
    return (
        <div>
            <input type="search" name="search-products" id="search-products" placeholder={"Search Products"}/>
            <section className={"demo"}>
                <NavLink to="featured">Featured Products</NavLink>
                <NavLink to="new-products">New Products</NavLink>
            </section>
            <article>
                <Outlet/>
            </article>
        </div>
    );
};

export default Products;