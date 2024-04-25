import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../Redux/WishlistSlice';
import { addItem } from '../Redux/CartSlice';
import toast from 'react-hot-toast';
import { Button, Card } from 'react-bootstrap';


const Wishlist = () => {

    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleRemoveFromWishlist = (id) => {
        dispatch(removeFromWishlist(id));
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        toast.success(`Added ${product.title} to cart!`)
    };

    const EmptyWishlist = () => (
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 bg-light text-center">
                    <h4 className="p-3 display-5">Your Wishlist is Empty</h4>
                    <Link to="/products" className="btn btn-outline-dark mx-4">
                        <i className="bi bi-arrow-left"></i> Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );

    const ShowWishlist = () => (
        <div className="container py-5">
            <div className="row">
                {wishlistItems.map((product) => (
                    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={product.id}>
                        <div className="card mb-4 shadow-sm">
                            <img className="card-img-top p-3"
                                src={product.image}
                                alt={product.title}
                                height="200px"
                                width="200px" />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <p className="card-text">
                                    {product.rating.rate}
                                    <i className="bi bi-star-fill"></i>
                                </p>
                                <h3 className="my-3">${product.price}</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-outline-danger" onClick={() => handleRemoveFromWishlist(product.id)}>
                                        Remove from Wishlist
                                    </button>
                                    <button className="btn  btn-outline-dark m-1" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <Navbar />
            <h1 className="text-center">Wishlist</h1>
            <hr className='container' />
            {wishlistItems.length > 0 ? <ShowWishlist /> : <EmptyWishlist />}
            <Footer />
        </>
    );


}

export default Wishlist;
