import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Form, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
        console.log({ email, password });
    };

    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center">Login</h1>
                <hr className='container' />
                <Form className="w-50 p-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                        </Col>
                    </Form.Group>
                    <div className="my-3">
                        <p>New Here? <Link to={"/register"} className="text-decoration-underline text-info">Register</Link> </p>
                    </div>
                    <Form.Group className=" text-center">
                        <Col >
                            <Button type="submit" className='btn btn-secondary'>Login</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default Login