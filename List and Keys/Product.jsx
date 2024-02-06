import React from 'react';

const Product = (p) => {
    console.log(p);
    return (
        <>
            <h1>{p.title}</h1>
        </>
    );
};

export default Product;