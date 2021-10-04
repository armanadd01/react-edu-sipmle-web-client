import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';
import "./Home.css"

const Home = () => {
    const [services, setService] = useState([]);
    // load fakedb data by useEffect
    useEffect(() => {
        fetch('./fakeDataDb.JSON')
        .then(res => res.json())
        .then(data => setService(data.home))
    },[])
    return (
        <div className="main container-fluid">
            <div className="row">
                {/* Banner Section */}
                <div className="banner col-md-12 col-12">
                    <div className="overlay text-center">
                    <h1 className="text-center text-light fs-1">Let's Study Together</h1>
                    <NavLink className="nav-link fs-4" to="/about">
                        <button className="btn btn-primary mt-5 fw-bold fs-4 px-5">
                            About
                        </button>
                    </NavLink>
                    
                    </div>
                </div>
            </div>
            {/* Home Services Section */}
            <div className=" py-5 mt-5 text-center">
                <div className="container">
                    <div className="row service-section">
                        <h1  className="py-5 my-5 border-bottom border-primary fs-3">Our Popular <span className="fs-2 fw-bold text-danger">Online Courses</span></h1>
                        {
                            services.map(service => <HomeServices
                                key={service.key}
                                service={service}
                            >

                            </HomeServices>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;