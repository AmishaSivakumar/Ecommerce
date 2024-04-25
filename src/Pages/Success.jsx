import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Button } from 'react-bootstrap';

const Success = () => {
  const purchasedItems = useSelector(state => Object.values(state.cart.items));


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Order Successful</h1>
        <hr />
        <div className="text-center">
          <h4>Your order has been successfully placed!</h4>
          <p>Thank you for shopping with us.</p>
          <div className="row mt-4 m-auto" style={{ width: '55%' }}>
            <div className="col-md-12">
              <h3>Order Details</h3>
              <ul className="list-group">
                {purchasedItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <span>{item.title}</span>
                    </div>
                    {item.quantity} x ${item.price} = ${item.quantity * item.price}
                  </li>
                ))}
              </ul>

            </div>
          </div> <br />
          <Button onClick={() => window.print()} className="btn btn-dark">Download Order Details</Button>
          <Link to={"/products"} className="btn btn-outline-dark mx-4">
            <i className="bi bi-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
