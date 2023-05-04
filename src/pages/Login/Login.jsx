import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')
        signIn(email, password)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
                setSuccess('Login a User Successfully');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                navigate(from, { replace: true });
                setSuccess('Login a User Successfully');
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(from, { replace: true })
                setSuccess('Login a User Successfully')
            })
            .catch(error=>{
                console.log('error', error.message)
            })
    }

    return (
        <Container style={{ width: '350px',background: '#fff',
        border: '1px solid #eee', padding: '40px' }} className='my-5 mx-auto'>
            <h3 className='mb-2 fw-bold'>Login</h3>
            <h5 className='mb-4 fw-medium'>Welcome Back, Please Login Your Account</h5>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>
                <br></br>
                <br />
                <Form.Text className="text-muted">
                    Don't Have An Account ?  <Link to={'/register'}>Register</Link>
                </Form.Text>
                <div className='mt-4'>
                    <Button onClick={handleGoogleSignIn} className='mb-3 w-100' variant="outline-danger"> <FaGoogle /> Login with Google</Button>
                    <Button onClick={handleGitHubSignIn} className='mb-3 w-100' variant="outline-dark"> <FaGithub /> Login with Github</Button>
                </div>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Login;