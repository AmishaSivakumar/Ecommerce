import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Button, Col, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';


const Checkout = () => {
    const navigate = useNavigate()
    const items = useSelector(state => Object.values(state.cart.items));
    const subtotal = useSelector(state => state.cart.subtotal);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Thank you for your order!')
        navigate('/success')
    };

    const EmptyCart = () => (
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 bg-light text-center">
                    <h4 className="p-3 display-5">Your Cart is Empty</h4>
                    <Link to={"/products"} className="btn btn-outline-dark mx-4">
                        <i className="bi bi-arrow-left"></i> Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )

    const ShowCheckout = () => (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>
            <div className="row">
                <div className="col-md-6">
                    <Form onSubmit={handleSubmit} className="p-3">
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                                    value={name} onChange={(e) => setName(e.target.value)} required >
                                </Form.Control>
                            </Col >
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label column sm={2}>Address</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                                    value={address} onChange={(e) => setAddress(e.target.value)} required></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" className="shadow p-2 mb-3 bg-body-tertiary rounded"
                                    value={email} onChange={(e) => setEmail(e.target.value)} required ></Form.Control>
                            </Col>
                        </Form.Group>

                        <Button type="submit" className="btn btn-dark">Place Order</Button>
                    </Form>
                </div>
                <div className="col-md-6">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <ul className="list-group">
                            {items.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title} : {item.quantity} x ${item.price} = ${item.quantity * item.price}
                                </li>
                            ))}
                        </ul>
                        <h3 className="mt-3">Subtotal: ${subtotal.toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Cart</h1>
                <hr />
                {items.length > 0 ? <ShowCheckout /> : <EmptyCart />}
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
