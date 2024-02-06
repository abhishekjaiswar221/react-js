import React, {useState} from 'react';
import Products from "./Product.json";
import Child from "./Child";

const App = () => {
    let [product, setProduct] = useState(Products);
    return (
        <div>
            <Child product={product}/>
        </div>
    );
};

export default App;