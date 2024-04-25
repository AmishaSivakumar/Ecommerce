import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Form, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center">Contact Us</h1>
                <hr className='container' />
                <Form className="w-50 p-3">
                    <Form.Group className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Full Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter your full name" className="shadow p-2 mb-3 bg-body-tertiary rounded" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="name@example.com" className="shadow p-2 mb-3 bg-body-tertiary rounded" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={5} className="shadow p-2 mb-3 bg-body-tertiary rounded" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Col>
                            <Button type="submit" className='btn btn-secondary'>Send</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default Contact