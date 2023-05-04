import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const [success, setSuccess] = useState('');

    const [registerError, setRegisterError] = useState('')

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        setSuccess('')
        setRegisterError('')
        console.log(name, email, photo, password)
        if (password.length < 6) {
            setRegisterError('Please Add Minimum 6 Characters');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('Create a User Successfully')
                UpdateUserData(result.user, name, photo)
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }


    const UpdateUserData = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            console.log('User Name Update');
        })
        .catch(error => {
            console.error(error.message);
            setRegisterError(error.message);
        })
    }

    return (
        <Container style={{ width: '350px',background: '#fff',
        border: '1px solid #eee', padding: '40px' }}  className='my-5 mx-auto'>
            <h3 className='mb-2 fw-bold'>Register</h3>
            <h5 className='mb-4 fw-medium'>Create Your Account</h5>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link to='/trams'>Term & Conditions</Link></>} />
                </Form.Group>
                <Button className='w-100' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <br></br>
                <br></br>
                <Form.Text className="text-muted">
                    All Ready Have An Account ?  <Link to={'/login'}>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success mt-2">
                    {success}
                </Form.Text>
                <p className='text-danger mt-2'>{registerError}</p>
            </Form>
        </Container>
    );
};

export default Register;