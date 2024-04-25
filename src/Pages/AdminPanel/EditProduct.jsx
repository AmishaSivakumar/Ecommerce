import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";

const EditProduct = ({ edit, handleEditClose, handleEdit, handleEdited }) => {
    return (
        <Modal show={true} onHide={handleEditClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formHorizontalTitle">
                    <Form.Label column sm={2}>
                        Title
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="title" value={edit.title} onChange={handleEdit} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHorizontalPrice">
                    <Form.Label column sm={2}>
                        Price
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="price" value={edit.price} onChange={handleEdit} />
                    </Col>
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdited}>
                        Change
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default EditProduct;
