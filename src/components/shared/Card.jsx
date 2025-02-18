import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse = false }) {
    // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

    return (
        <div
            className="card"
            style={{
                backgroundColor: reverse ? '#005F73' : '#e5e5e5',
                color: reverse ? '#fff' : '#000',
            }}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
};

export default Card;
