import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logoImg from '../../images/logo.png';

const Header = () => {
    return (
        <div className="container-fluid border-bottom border-primary"> 
            <div className="row header-top border-bottom border-primary">
                <div className="phone col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 ">+880 1234 567890</p>
                </div>
                <div className="email col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 ">armanaedu@gmail.com</p>
                </div>
                <div className=" col-md-6">
                    <p className="text-end pt-3 fs-6 ">Largest online IT learning Platform</p>
                </div>
            </div>
            <div className="header-bottom">
                <div className="navbar navbar navbar-expand-lg navbar-light">
                    {/* Site logo */}
                    <div className="col-md-3 col-sm-3 navbar-brand">
                        <img className="w-25 h-25 ms-5" src={logoImg} alt="" />
                    </div>
                    {/* Navigation bar */}
                    <div className="main-menu col-md-5 col-sm-5">
                        <nav className="container-fluid">
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
                        </nav>
                    </div>
                    <div className="search-menu col-md-4 col-sm-4 d-flex pe-4">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;