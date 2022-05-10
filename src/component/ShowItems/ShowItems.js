import React from 'react';

const ShowItems = ({item}) => {
    const {name, img, quantity} = item
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ShowItems;