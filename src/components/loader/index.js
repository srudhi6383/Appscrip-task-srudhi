import React from 'react';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="pulse-loader">
                <div className="pulse"></div>
                <div className="pulse"></div>
                <div className="pulse"></div>
            </div>
        </div>
    );
}

export default Loader;
