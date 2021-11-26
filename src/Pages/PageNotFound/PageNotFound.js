import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container">

            <img className="img-fluid w-75" src="https://i.ibb.co/Sv4VyrK/error.jpg" alt="" />

            <div className="text-center">
                <Link to="/home"><button className="btn btn-primary p-3 fs-5">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default PageNotFound;