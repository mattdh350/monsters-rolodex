import React from 'react';
import './card.styles.css';

export const Card = props => {   
    return (
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.model.id}?set=set2&size=180x180`} />
            <h2>{props.model.name}</h2>
            <p>{props.model.email}</p>
        </div>
    );
};
