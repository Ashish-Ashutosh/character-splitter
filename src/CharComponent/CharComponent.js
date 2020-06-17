import React from 'react';

const CharComponent = (props) => {

    const style  = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    //const splitting = props.boxit.split(' ');

    return(
        <div style={style}>
            {props.character}
        </div>
    );
};

export default CharComponent;