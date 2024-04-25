import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux/CartSlice";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const subtotal = useSelector(state => state.cart.subtotal);
  const dispatch = useDispatch();

  const cartItems = Object.values(items);

  const EmptyCart = () => (
    <div className="container" style={{height: "70vh"}}>
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to={"/products"} className="btn btn-outline-dark mx-4">
          <i className="bi bi-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => (
    <>
      <section className="h-100 gradient-custom" >
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {cartItems.map(item => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <img src={item.image} alt={item.title} className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p><strong>{item.title}</strong></p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <button className="btn px-3" onClick={() => dispatch(removeItem(item.id))}>
                              <strong>
                                <i className="bi bi-dash-lg"></i>
                              </strong>
                            </button>
                            <p className="mx-5">{item.quantity}</p>
                            <button className="btn px-3" onClick={() => dispatch(addItem(item))}>
                              <strong>
                                <i className="bi bi-plus-lg"></i>
                              </strong>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>{item.quantity} x ${item.price}</strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
                  <Link to={"/checkout"} className="btn btn-dark btn-lg btn-block">
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <Link to={"/products"} className="btn btn-dark btn-lg btn-block">Continue Shopping</Link>
        </center>
      </section>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">Cart</h1>
        <hr />
        {cartItems.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
