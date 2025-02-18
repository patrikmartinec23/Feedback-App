import React from 'react';
import PropTypes from 'prop-types';

function Header({
    text = 'Feedback UI',
    lightBgColor = '#0077B6',
    darkBgColor = '#3C6E71',
    textColor = '#fff',
    darkMode = false,
}) {
    const bgColor = darkMode ? darkBgColor : lightBgColor;

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    reverse: PropTypes.bool,
};

export default Header;
