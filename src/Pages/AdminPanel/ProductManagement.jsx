// import React, { useState, useEffect } from "react";
// import { Button, Col, Form, Modal } from "react-bootstrap";

// const ProductManagement = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//             .then((response) => response.json())
//             .then((data) => setProducts(data));
//     }, []);

//     const handleDelete = (index, e) => {
//         setProducts(products.filter(product => product.id != index))
//     }

//     console.log(products);

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [input, setInput] = useState({
//         title: " ",
//         price: " "
//     })
//     const handleChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newProduct = [...products, input]
//         setProducts(newProduct)
//         handleClose()
//     }

//     const [edit, setEdit] = useState({
//         id: products.id,
//         title: products.title,
//         price: products.price
//     })
//     const [editShow, setEditShow] = useState(false);
//     const handleEditClose = () => setEditShow(false);
//     const handleEditShow = (productId) => {
//         setEditShow(true);
//         const idFind = products.find(product => product.id == productId)
//         setEdit({
//             id: idFind.id,
//             title: idFind.title,
//             price: idFind.price
//         })
//     };


//     const handleEdit = (e) => {
//         setEdit({ ...edit, [e.target.name]: e.target.value })
//     }
//     const handleEdited = (id) => {
//         const editedData = products.map(product => {
//             if (product.id == id) {
//                 return {
//                     ...products, title: edit.title, price: edit.price
//                 }
//             }
//             return product
//         })
//         setProducts(editedData)
//         handleEditClose()
//     }

//     return (
//         <>
//             <div className="d-flex flex-column align-items-center">
//                 <h2>Product Management</h2>
//                 <hr className="container" />
//                 <div>
//                     <h3>Product List</h3>
//                     <ul className="list-unstyled" >
//                         {products.map((product) => (
//                             <div key={product.id}>
//                                 <li key={product.id}>
//                                     {product.title} - ${product.price}
//                                 </li>
//                                 <Button variant="primary" onClick={() => handleEditShow(product.id)}>
//                                     Edit
//                                 </Button>

//                                 <button onClick={(e) => handleDelete(product.id, e)}>Delete</button>
//                             </div>
//                         ))}
//                     </ul>
//                     <Button variant="primary" onClick={handleShow}>
//                         Create
//                     </Button>
//                     <Modal show={show} onHide={handleClose} animation={false}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Modal heading</Modal.Title>
//                         </Modal.Header>
//                         <Form>
//                             <Form.Group className="mb-3" controlId="formHorizontalTitle">
//                                 <Form.Label column sm={2}>
//                                     Title
//                                 </Form.Label>
//                                 <Col sm={10}>
//                                     <Form.Control type="text" name='title' onChange={handleChange} />
//                                 </Col>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="formHorizontalPrice">
//                                 <Form.Label column sm={2}>
//                                     Price
//                                 </Form.Label>
//                                 <Col sm={10}>
//                                     <Form.Control type="text" name='price' onChange={handleChange} />
//                                 </Col>
//                             </Form.Group>

//                         </Form>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                             <Button variant="primary" onClick={handleSubmit}>
//                                 Add
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                     <Modal show={editShow} onHide={handleEditClose} animation={false}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Modal heading</Modal.Title>
//                         </Modal.Header>
//                         <Form>
//                             <Form.Group className="mb-3" controlId="formHorizontalTitle">
//                                 <Form.Label column sm={2}>
//                                     Title
//                                 </Form.Label>
//                                 <Col sm={10}>
//                                     <Form.Control type="text" name='title' value={edit.title} onChange={handleEdit} />
//                                 </Col>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="formHorizontalPrice">
//                                 <Form.Label column sm={2}>
//                                     Price
//                                 </Form.Label>
//                                 <Col sm={10}>
//                                     <Form.Control type="text" name='price' value={edit.price} onChange={handleEdit} />
//                                 </Col>
//                             </Form.Group>

//                         </Form>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleEditClose}>
//                                 Close
//                             </Button>
//                             <Button variant="primary" onClick={() => handleEdited(edit.id)}>
//                                 Change
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default ProductManagement;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

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

    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center">
                <h2>Product Management</h2>
                <hr className="container" />
                <ProductList products={products} handleEditShow={handleEditShow} handleDelete={handleDelete} />
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
