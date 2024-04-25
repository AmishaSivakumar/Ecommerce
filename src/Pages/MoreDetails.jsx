import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/CartSlice';
import toast from 'react-hot-toast';

function MoreDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addItem(product));
        toast.success(`Added ${product.title} to cart!`)
    };

    if (!product) {
        return (
            <div className="dot-spinner m-auto">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>)
    }


    return (
        <>
            <Navbar /> <br />
            <center>
                <div className="container row" key={product.id}>
                    <h1>{product.title}</h1>
                    <div className="col-md-6 col-sm-12 py-3 ">
                        <img
                            className="img-fluid"
                            src={product.image}
                            alt={product.title}
                            width="200px"
                            height="200px"
                        />
                    </div>
                    <div className="col-md-6 col-md-6 py-5 text-start">
                        <p>{product.description}</p>
                        <p className="lead">
                            {product.rating && product.rating.rate}{" "}
                            <i className="bi bi-star-fill"></i>
                        </p>
                        <h3 className="display-6  my-4">${product.price}</h3>
                        <button className="btn btn-dark m-1" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                        <Link className="btn btn-dark m-1" to={"/cart"}>
                            Go to Cart
                        </Link>
                    </div>
                </div>
            </center> <br />
            <Footer />
        </>
    )
}

export default MoreDetails;
