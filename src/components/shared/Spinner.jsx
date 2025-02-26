import React from 'react';
import spinner from '../assets/loading-7528_256.gif';

function Spinner() {
    return (
        <img
            src={spinner}
            alt="Loading..."
            style={{ width: '100px', margin: 'auto', display: 'block' }}
        />
    );
}

export default Spinner;
