// Class based Component:

import React, {Component} from "react";

class Child extends Component {
    render() {
        let {username, id, skills, isNull, isMarried, isUndefinedValue, address} =
            this.props;
        let {pinCode, area, state} = address;
        return (
            <>
                <h1>Username: {username}</h1>
                <h2>Id:{id}</h2>
                <p>Marital status: {isMarried ? "married" : "unmarried"}</p>
                <ul>
                    Skills:
                    {skills.map((v) => {
                        return <li>{v}</li>;
                    })}
                </ul>
                <h2>{isNull === null ? "This value is null" : "Loading"}</h2>
                <p>{isUndefinedValue === undefined ? "Undefined" : "Loading???????"}</p>
                <ul>
                    <li>Area:{area}</li>
                    <li>State:{state}</li>
                    <li>Pin code:{pinCode}</li>
                </ul>
            </>
        );
    }
}

export default Child;
