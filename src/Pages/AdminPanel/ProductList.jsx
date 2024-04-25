import React from "react";
import { Button, Table } from "react-bootstrap";

const ProductList = ({ products, handleEditShow, handleDelete }) => {
    return (
        <div>
            <h3 className="text-center">Product List</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEditShow(product.id)}>
                                    Edit
                                </Button>
                            </td>
                            <td><button onClick={(e) => handleDelete(product.id, e)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;
