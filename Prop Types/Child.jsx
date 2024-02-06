import {PropTypes} from "prop-types";

console.log(PropTypes);
let {number, string} = PropTypes;
const Child = (props) => {
    console.log(props);
    return (
        <>
            <h1>{props.username}</h1>
            <h2>{props.id}</h2>
        </>
    );
};

Child.propTypes = {
    username: string,
    sal: PropTypes.number,
    id: number
};
export default Child;