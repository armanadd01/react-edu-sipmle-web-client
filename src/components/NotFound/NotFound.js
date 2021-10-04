import React from 'react';
import notFound from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="container my-5">
            {/* not Found image */}
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;