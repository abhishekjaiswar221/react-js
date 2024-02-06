import {useState} from "react";
import Products from "./ProductsData";
import "./global.css";

const App = () => {
    let [product, setProduct] = useState(Products);
    return (
        <section id={"container"}>
            <article>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {product.map((v, i) => {
                        let {id, title, description, image, category, price, rating} = v;
                        let {rate} = rating;
                        return (
                            <>
                                <tr>
                                    <td>{id}</td>
                                    <td><img src={image} alt="img"/></td>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td id={"category"}>{category}</td>
                                    <td>{price + "$"}</td>
                                    <td>{rate}</td>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
            </article>
        </section>
    )
}
export default App;