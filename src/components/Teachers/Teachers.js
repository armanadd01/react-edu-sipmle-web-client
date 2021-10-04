import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./fakeDataDb.JSON')
        .then(res => res.json())
        .then(data => setService(data.service))
    },[])
    return (
        <div className="teachers">
            <div className="container">
                <div className="row service-section">
                    <h1  className="py-5 my-5 border-bottom border-primary fs-3">Our World Class <span className="fs-2 fw-bold text-danger">Trainer</span></h1>
                    {
                        services.map(service => <Teacher
                            key={service.key}
                            service={service}
                        >
                        </Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teachers;