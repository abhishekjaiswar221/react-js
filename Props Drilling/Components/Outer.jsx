const Outer = ({demo}) => {
    console.log(demo);
    return (
        <>
            <h1>{demo.username}</h1>
            <h2>{demo.sal}</h2>
            <h3>{demo.id}</h3>
        </>
    );
};
export default Outer;