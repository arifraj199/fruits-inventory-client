import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className='spinner'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default LoadingSpinner;