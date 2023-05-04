import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ color: '#ffffffb3', backgroundColor: '#1A1919' }} className='py-16 md:py-24 lg:py-32'>
            <Container>
                <div className=''>
                    <div className='footer-top row'>
                        <div className='col-12 col-md-6 col-lg-4 mb-10'>
                            <Link className='text-decoration-none fw-bold' to='/'><h2 className='text-white mb-4'>Testy Recipes</h2></Link>
                            <p className='mb-5 me-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Learn More</h4>
                            <ul className=''>
                                <li className='mb-3'>
                                    <NavLink to='/'
                                        className={({ isActive }) => (isActive ? 'text-decoration-none text-primary' : 'text-decoration-none text-white')}>Home</NavLink>
                                </li>
                                <li className='mb-3'>
                                    <NavLink to='/blog'
                                        className={({ isActive }) => (isActive ? 'text-decoration-none text-primary' : 'text-decoration-none text-white')}>Blog</NavLink>
                                </li>
                                <li className='mb-3'>About Us</li>
                                <li className='mb-3'>Recipe</li>
                                <li className='mb-3'>Latest News</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-2 mb-10'>
                            <h4 className='mb-4 text-white '>Categories</h4>
                            <ul className=''>
                                <li className='mb-3'>Lunch</li>
                                <li className='mb-3'>Breakfast</li>
                                <li className='mb-3'>Drink</li>
                                <li className='mb-3'>Appetizer & Snack</li>
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
                            <h4 className='mb-4 text-white '>Get in connect</h4>
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