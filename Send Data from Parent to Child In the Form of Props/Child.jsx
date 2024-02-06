const Child = (props) => {
    console.log(props);
    let {state, products, foo, changedState} = props;
    return (
        <section>
            <article>
                {products.map((v) => {
                    // console.log(v);
                    let {id, title, price, image} = v;
                    let div = document.createElement("div");
                    document.getElementById("root").appendChild(div);
                    div.innerHTML = `
                    <h1>${id}</h1>
                    <h2>${title}</h2>
                    <img src=${image} alt="Image" style="height: 200px;width:200px">
                    <h3>${price + " " + "$"}</h3>
                    `;
                })}
            </article>
            <h1>{state.id}</h1>
            <h1>{state.username}</h1>
            <h1>{state.email}</h1>
            <button onClick={changedState}>Change State</button>
            <h2>{foo("Abhishek")}</h2>
        </section>
    );
};

export default Child;
