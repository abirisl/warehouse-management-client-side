import React from 'react';

const ShowItems = (props) => {
    const {name} = props.item
    
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ShowItems;