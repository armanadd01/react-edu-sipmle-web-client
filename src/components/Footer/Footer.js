import React from 'react';
import logoImg from '../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        // footer top Section
        <div className="container-fluid mt-5 bg-dark text-center">
            <div className="footer-top p-5">
                <img className=" m-5 footer-img" src={logoImg} alt="" />
                <div className="copy-rights">
                    <p className="text-bold text-light fs-5">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                    <h3 className="text-light">Stay Updated</h3>
                    <div className="input-group mb-3 mt-5 border-0">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="btn btn-outline-primary input-group-text" id="basic-addon2">Subscribe Now</button>
                    </div>
                </div>

            </div>
            {/* Footer Bottom Section */}
            <div className=" row  bg-light footer-bottom">
                <div className="phone col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 "> <b>Phone</b>+880 1234 567890</p>
                </div>
                <div className="email col-md-3 col-12 border-end border-primary">
                    <p className="text-center pt-3 fs-6 "><b>Email:</b> armanaedu@gmail.com</p>
                </div>
                <div className=" col-md-6">
                        <p className="text-dark text-end pt-3 fs-6">&copy; 2021. All Rights reserved ArmanEnt EDU. Design and Developed Bt Arman Habib </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;