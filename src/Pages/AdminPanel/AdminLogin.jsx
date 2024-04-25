import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Navbar from './Navbar'

function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">Login</h1>
        <hr className='container' />
        <Form className="w-50 p-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
            </Col>
          </Form.Group>
          <Form.Group className=" text-center">
            <Col >
              <Button type="submit" className='btn btn-secondary'>Login</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default AdminLogin