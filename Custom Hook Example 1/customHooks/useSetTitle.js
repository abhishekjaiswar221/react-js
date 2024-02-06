import React, {useEffect} from 'react';

const UseSetTitle = (count) => {
    useEffect(() => {
        document.title = `Count - ${count}`
    });
};

export default UseSetTitle;