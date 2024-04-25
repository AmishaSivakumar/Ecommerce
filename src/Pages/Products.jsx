import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/WishlistSlice";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    console.log(products);
    const searchProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const wishlist = useSelector(state => state.wishlist.items);

    const dispatch = useDispatch();
    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
        toast.success(`Added ${product.title} to wishlist!`)
    };



    if (!searchProducts.length) {
        return (
            <Loading/>
            )
    }

    return (
        <>
            <Navbar />

            <h1 className="text-center">Latest Products</h1>
            <hr className='container' />
            <div className="container my-5 ">
                <div className="sticky-top py-4 bg-white" style={{ top: '64px', zIndex: '1030', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="form-control border border-secondary-subtle m-auto mb-4 "
                        style={{ width: '40%' }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="row">
                    {searchProducts.map(product => (
                        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={product.id}>
                            <div className="card mb-4 shadow-sm">
                                <img
                                    className="card-img- p-3 "
                                    src={product.image}
                                    alt={product.title}
                                    height={"300px"}
                                    style={{objectFit: "fill"}}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title  text-truncate" >{product.title}</h5>
                                <p className="card-text">
                                    {product.rating.rate} <i className="bi bi-star-fill"></i>
                                </p>
                                <h3 className="my-3">${product.price}</h3>
                                <Link to={`/moredetails/${product.id}`} className="btn btn-dark m-2" >
                                    More Details
                                </Link>
                                <button
                                    className="btn btn-dark m-2"
                                    onClick={() => handleAddToWishlist(product)}
                                    disabled={wishlist.some(item => item.id === product.id)}
                                >
                                    {wishlist.some(item => item.id === product.id) ? "Added" : "Add to Wishlist"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;

