import React from 'react';
import Authentication from "./Authentication";


const Dashboard = ({val}) => {
    return (
        <div>
            <h1>Dashboard Component</h1>
            <h1>{val}</h1>
        </div>
    );
};

export default Authentication(Dashboard, "dashboardComponent");