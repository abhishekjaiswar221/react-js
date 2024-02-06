import React, {Fragment} from 'react';
import Product from "./Product";

console.log(React.Fragment);
const Child = ({product}) => {
    console.log(product);
    return (
        <div>
            {product.map((v) => {
                return (
                    <Fragment key={v.id}>
                        <Product {...v}/>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Child;