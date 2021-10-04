import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);
    // load Service data by useEffect
    useEffect(() => {
        fetch('./fakeDataDb.JSON')
        .then(res => res.json())
        .then(data => setService(data.service))
    },[])
    return (
        <div className="services">
            <div className="container">
                <div className="row service-section">
                    <h1  className="py-5 my-5 border-bottom border-primary fs-3">Our Popular <span className="fs-2 fw-bold text-danger">Online Courses</span></h1>
                    {
                        // map service data
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;