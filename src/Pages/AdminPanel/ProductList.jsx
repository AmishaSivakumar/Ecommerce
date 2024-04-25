import React from "react";
import { Button, Table } from "react-bootstrap";

const ProductList = ({ products, handleEditShow, handleDelete, setLimit }) => {
    
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
                        <td><button className="btn btn-danger" onClick={(e) => handleDelete(product.id, e)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <button className="btn btn-outline-primary" onClick={() => setLimit(previous => previous + 5)}>Click for more</button>
    </div>
);
};

export default ProductList;
