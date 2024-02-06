import React from 'react';
import {Outlet} from "react-router-dom";

const User = () => {
    return (
        <section>
            <article>
                <h1>User 1</h1>
                <h1>User 2</h1>
                <h1>User 3</h1>
            </article>
            <article>
                <Outlet/>
            </article>
        </section>
    );
};

export default User;