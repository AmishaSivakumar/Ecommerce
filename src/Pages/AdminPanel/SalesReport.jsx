import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Navbar from "./Navbar";

const SalesReport = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        fetch("")
            .then((response) => response.json())
            .then((data) => {
                setSalesData(data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className="container text-center">
                <h2>Sales Report</h2>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User ID</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
                <Button onClick={() => window.print()} className="btn btn-dark">Download Sales Report</Button>
            </div>
        </>
    );
};

export default SalesReport;
