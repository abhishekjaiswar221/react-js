import React from 'react';

const Navbar = ({isAuth}) => {
    let {isLoggedIn} = isAuth;
    switch (isLoggedIn) {
        case true: {
            return (
                <div>
                    <ul>
                        <li><a href="">Home</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Products</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Shashi</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
            );
        }
        case false: {
            return (
                <div>
                    <ul>
                        <li><a href="">Home</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Product</a></li>
                    </ul>
                    <ul>
                        <li><a href="">SignUp</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            )
        }
        default: {
            return (
                <h1>Kuch Nahi Hai</h1>
            )
        }
    }
};

export default Navbar;