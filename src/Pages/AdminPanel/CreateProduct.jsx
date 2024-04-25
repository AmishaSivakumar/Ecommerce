import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";

const CreateProduct = ({ handleClose, handleSubmit }) => {
  const [input, setInput] = useState({
    title: "",
    price: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={true} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} className="m-3">
        <Form.Group className="mb-3" controlId="formHorizontalTitle">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorizontalPrice">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" name="price" onChange={handleChange} />
          </Col>
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CreateProduct;
