import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImg from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
    return (
        <div className="container-fluid border-bottom border-primary"> 
            <div className="row header-top d-lg-flex d-none border-bottom border-primary">
                <div className="phone col-md-4  border-end border-primary">
                    <p className="text-center pt-3 fs-6 ">+880 1234 567890</p>
                </div>
                <div className="email col-md-4  border-end border-primary">
                    <p className="text-center pt-3 fs-6 ">armanaedu@gmail.com</p>
                </div>
                <div className=" col-md-4">
                    <p className="text-center pt-3 fs-6 ">Largest online IT learning Platform</p>
                </div>
            </div>
            <div className="header-bottom">
                <div className="navbar navbar navbar-expand-md navbar-light">
                    {/* Site logo */}
                    <div className="container-fluid">
                        <div className="navbar-brand w-25 ms-md-5 ms-0">
                            <img className="w-25" src={logoImg} alt="" />
                        </div>
                    {/* Navigation bar */}
                        
                        
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <nav className="collapse navbar-collapse p-md-0 p-3" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item p-2">
                                        <NavLink activeClassName="bg-primary text-light" className="nav-link fs-4" to="/home">Home</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink activeClassName="bg-primary text-light" className="nav-link fs-4" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink activeClassName="bg-primary text-light" className="nav-link fs-4" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item p-2">
                                        <NavLink activeClassName="bg-primary text-light" className="nav-link fs-4" to="/teachers">Teachers</NavLink>
                                    </li>
                                </ul>
                                <div className="search-menu d-flex pe-md-4 mt-md-0 mt-3">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-primary" type="submit">Search</button>
                                </div>
                            </nav>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;