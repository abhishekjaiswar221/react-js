import React from 'react';

const Child = (props) => {
    console.log(props);
    return (
        <div>
            <!-- Approach 1 -->
            {/*<h1>Name:{props.name || "NA"}</h1>*/}
            {/*<h2>Name:{props.id || "NA"}</h2>*/}
            {/*<h3>Name:{props.sal || "NA"}</h3>*/}
            <!-- Approach 2 -->
            <h1>Name:{props.name}</h1>
            <h2>Name:{props.id}</h2>
            <h3>Name:{props.sal}</h3>

        </div>
    );
};
<!-- Approach 2 -->
Child.defaultProps = {
    name: "NA",
    id: "NA",
    sal: "NA",
}
export default Child;