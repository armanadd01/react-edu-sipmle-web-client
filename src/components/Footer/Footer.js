import React from 'react';
import logoImg from '../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid mt-5 bg-dark text-center">
            <div className="footer-top p-5">
                <img className=" m-5 footer-img" src={logoImg} alt="" />
                <div className="copy-rights">
                    <p className="text-bold text-light fs-5">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                    <p className="text-light">&copy; 2021. All Rights reserved ArmanEnt EDU </p>
                </div>

            </div>
            <div className=" row  bg-light footer-bottom">
                <div className="phone col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 "> <b>Phone</b>+880 1234 567890</p>
                </div>
                <div className="email col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 "><b>Email:</b> armanaedu@gmail.com</p>
                </div>
                <div className=" col-md-6">
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;