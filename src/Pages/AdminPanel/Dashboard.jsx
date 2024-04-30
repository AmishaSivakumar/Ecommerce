import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";


const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setTotalProducts(data.length))
            .catch(err => console.error('Failed to load products', err));

        fetch("https://fakestoreapi.com/users")
            .then(response => response.json())
            .then(data => setTotalUsers(data.length))
            .catch(err => console.error('Failed to load users', err));
    }, []);
    return (
        <>
            <Navbar />
            <div className="container text-center">
                <hr className="container" />
                <div className='p-5 bg-light shadow rounded'>
                    <h3>Statistics</h3>
                    <p>Total Users: {totalUsers}</p>
                    <p>Total Products: {totalProducts}</p>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
