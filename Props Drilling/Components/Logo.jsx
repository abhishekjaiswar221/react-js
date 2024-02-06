import Outer from "./Outer";

const Logo = ({val}) => {
    console.log(val);
    return (
        <>
            <Outer demo={val}/>
        </>
    );
};
export default Logo;