import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to={"/"}>Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/about"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/admin"}>admin</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to={"/login"} className="btn btn-outline-dark m-2"><i className="bi bi-box-arrow-in-right"></i> Login</NavLink>
                        <NavLink to={"/cart"} className="btn btn-outline-dark m-2"><i className="bi bi-cart3"></i> Cart</NavLink>
                        <NavLink to={"/wishlist"} className="btn btn-outline-dark m-2"><i className="bi bi-heart"></i> Wishlist</NavLink>
                        <NavLink to={"/profile"} className="btn btn-outline-dark m-2"><i className="bi bi-person"></i> Profile</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
