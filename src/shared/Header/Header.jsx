import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../pages/provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Link className='text-decoration-none fw-bold' to='/'><h2 className='fw-bold text-black'>Testy Recipes</h2></Link>
                    <Nav className="mx-auto">
                        <Link className='me-3 fw-semibold fs-5 text-decoration-none text-dark' to={'/'}>Home</Link>
                        <Link className='me-3 fw-semibold fs-5 text-decoration-none text-dark' to={'/blog'}>Blog</Link>
                    </Nav>
                    <Nav className='d-flex gap-3 align-items-lg-center'>
                        {
                            user && <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user.displayName ? user.displayName : 'No Username Found'}</Tooltip>}>
                                <span className="d-inline-block">
                                    {
                                        user.photoURL ? <img style={{ width: '50px', borderRadius: '50%' }} src={user.photoURL} alt="" /> : <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                                    }
                                </span>
                            </OverlayTrigger>


                        }

                        {
                            user ? <Button onClick={handleLogout} variant="success">Log Out</Button> : <Link to="/login">
                                <Button variant="success">Log In</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;