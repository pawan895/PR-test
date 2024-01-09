
import React from 'react';

const Card = ({ name, number }) => {
    return (
        <div className="card" style={{ 
            backgroundColor: 'gray', 
            padding: '20px', 
            margin : '10px',
            borderRadius: '5px',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '10px' }}>{name}</h2>
            <p style={{ color: 'black', fontSize: '16px' }}>{number}</p>
        </div>
    );
};

export default Card;
