import React from 'react';

const Navbar = ({isAuth}) => {
    // console.log(isAuth);
    let {isLoggedIn} = isAuth;
    console.log(isLoggedIn);
    let User = () => {
        return (
            <>
                <ul>
                    <li><a href="">Shashi</a></li>
                </ul>
                <ul>
                    <li><a href="">UpdateProfile</a></li>
                </ul>
                <ul>
                    <li><a href="">Logout</a></li>
                </ul>
            </>
        );
    };

    let Guest = () => {
        return (
            <>
                <ul>
                    <li><a href="">SignUp</a></li>
                </ul>
                <ul>
                    <li><a href="">LogIn</a></li>
                </ul>
            </>
        );
    };

    return (
        <section>
            <article>
                <ul>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>Products</li>
                </ul>
                {isLoggedIn ? <User/> : <Guest/>}
            </article>
        </section>
    );
};

export default Navbar;
