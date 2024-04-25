import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Form, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../Redux/UserSlice'

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(setUserDetails({ fullName, email, password, address, phone }));
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Register</h1>
        <hr className='container' />
        <Form className="w-50 p-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label column sm={2}>
              Full Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Enter your full name" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                onChange={(e) => setFullName(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="name@example.com" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label column sm={2}>
              Phone
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="+91 1234567890" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                onChange={(e) => setPhone(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Address" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                onChange={(e) => setAddress(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                onChange={(e) => setPassword(e.target.value)} />
            </Col>
          </Form.Group>
          <div className="my-3">
            <p>Already has an account?
              <Link to={"/login"} className="text-decoration-underline text-info">Login</Link>
            </p>
          </div>
          <Form.Group className="text-center">
            <Col>
              <Button type="submit" className='btn btn-secondary'>Register</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Footer />

    </>
  )
}

export default Register