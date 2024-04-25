import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";
import Loading from "../../Components/Loading";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);

            });
    }, [limit]);

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleEditShow = (id) => {
        const productToEdit = products.find((product) => product.id === id);
        setEditProduct(productToEdit);
        setShowEditModal(true);
    };

    const handleEditClose = () => setShowEditModal(false);

    const handleEditChange = (e) => {
        setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    };

    const handleEdited = () => {
        const editedProducts = products.map((product) => {
            if (product.id === editProduct.id) {
                return editProduct;
            }
            return product;
        });
        setProducts(editedProducts);
        handleEditClose();
    };

    const handleCreateClose = () => {
        setShowCreateModal(false);
    };

    const handleCreateShow = () => {
        setShowCreateModal(true);
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            title: e.target.title.value,
            price: e.target.price.value,
        };
        setProducts([...products, newProduct]);
        handleCreateClose();
    };
    if (products.length == 0) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <h2>Product Management</h2>
                <hr className="container" />
                <ProductList products={products} handleEditShow={handleEditShow} handleDelete={handleDelete} setLimit={setLimit} />
                <Button variant="primary" onClick={handleCreateShow}>
                    Create
                </Button>
                {showCreateModal && <CreateProduct handleClose={handleCreateClose} handleSubmit={handleCreateSubmit} />}
                {showEditModal && (
                    <EditProduct
                        edit={editProduct}
                        handleEditClose={handleEditClose}
                        handleEdit={handleEditChange}
                        handleEdited={handleEdited}
                    />
                )}


            </div>
        </>
    );
};

export default ProductManagement;
