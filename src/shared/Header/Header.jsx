import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../pages/provider/AuthProvider';

const Header = () => {


    const {user} = useContext(AuthContext)

    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <h2 className='fw-bold'>Testy Recipes</h2>
                        <Nav className="mx-auto">
                            <Link className='me-3 fw-semibold fs-5 text-decoration-none text-dark' to={'/'}>Home</Link>
                            <Link className='me-3 fw-semibold fs-5 text-decoration-none text-dark' to={'/blog'}>Blog</Link>
                        </Nav>
                        <Nav className='d-flex gap-3 align-items-lg-center'>
                            <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                            <Link to="/login">
                                <Button variant="success">Log In</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;