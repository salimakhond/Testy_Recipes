import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center py-5'>
            <h2>Coming Our Term & Conditions</h2>
            <p className='mt-2'>
                Accept Term & Conditions
            </p>
            <Link to='/register'>
                <button type="button" className="btn btn-primary">Go Back Register</button>
            </Link>
        </div>
    );
};

export default Trams;