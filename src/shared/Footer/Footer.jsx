import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ color: '#ffffffb3', backgroundColor: '#1A1919' }} className='py-16 md:py-24 lg:py-32'>
            <Container>
                <div className=''>
                    <div className='footer-top row'>
                        <div className='col-12 col-md-6 col-lg-4 mb-10'>
                            <Link className='text-decoration-none fw-bold' to='/'><h2 className='text-white mb-5'>Testy Recipes</h2></Link>
                            <p className='mb-5 md:mr-10 lg:mr-0'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Company</h4>
                            <ul className=''>
                                <li className='mb-3'>About Us</li>
                                <li className='mb-3'>Recipe</li>
                                <li className='mb-3'>Blog</li>
                                <li className='mb-3'>Latest News</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Recipe Categories</h4>
                            <ul className=''>
                                <li className='mb-3'>Lunch</li>
                                <li className='mb-3'>Main Dishes</li>
                                <li className='mb-3'>Beverages</li>
                                <li className='mb-3'>Side Dishes</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Support</h4>
                            <ul className=''>
                                <li className='mb-3'>Help Desk</li>
                                <li className='mb-3'>Sales</li>
                                <li className='mb-3'>Become a Partner</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Contact</h4>
                            <ul className=''>
                                <li className='mb-3'>Dhaka , Bangladesh</li>
                                <li className='mb-3'>+1 777 - 978 - 5570</li>
                                <li className='mb-3'>info@gmail.com</li>
                                <li className='mb-3'>support@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='py-5 d-lg-flex justify-content-between text-center'>
                        <p className='pb-2 md:mb-0'><span>&copy;</span> 2023 Testy Recipes. All Rights Reserved</p>
                        <p>Powered by Testy Recipes</p>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Footer;