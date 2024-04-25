import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    return (
        <div className="container my-5">
            <h2 className='text-center'>Featured Products</h2>
            <hr /> <br />
            <div className="row">
                {products.slice(0, 3).map(product => (
                    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={product.id}>
                        <div className="card mb-4 shadow-sm">
                            <img
                                className="card-img- p-3"
                                src={product.image}
                                alt={product.title}
                                height={"300px"}
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title  text-truncate" >{product.title}</h5>
                            <p className="card-text">
                                {product.rating.rate} <i className="bi bi-star-fill"></i>
                            </p>
                            <h3 className="my-3">${product.price}</h3>
                            <Link to={`/moredetails/${product.id}`} className="btn btn-dark" >
                                More Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
