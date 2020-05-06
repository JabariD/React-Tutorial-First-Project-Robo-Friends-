import React from 'react';

const Scroll = (props) => {
    return(
        // blue = JavaScript expression // yellow = object
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;