import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Navbar from "./Navbar";
import Loading from "../../Components/Loading";

const SalesReport = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setSalesData(data);
            });
    }, []);
    if (salesData.length == 0) {
        return <Loading />
    }
    return (
        <>
            <Navbar />
            <div className="container text-center">
                <h2>Sales Report</h2>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>
                                    <img src={product.image} alt={product.title} style={{ width: 100, height: 100, objectFit: "scale-down" }} />
                                </td>
                                <td>$ {product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button onClick={() => window.print()} className="btn btn-dark mb-3">Download Sales Report</Button>
            </div>
        </>
    );
};

export default SalesReport;
