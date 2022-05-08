import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../images/auth-img/facebook.png';
import google from '../../images/auth-img/google.png';
import github from '../../images/auth-img/github.png';


const Register = () => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg mt-3 mb-3'>
                    <h1 className='text-info p-3 text-center mb-3'>Sign Up</h1>
                    <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder="New password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Comfirm password</Form.Label>
                            <Form.Control type="password" placeholder="Comfirm Password" />
                        </Form.Group>
                        <Button className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                    <div className='mt-3'>
                        <p>
                            <small>Already Have an Account?</small> <Link to='/login'>Login</Link>
                        </p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                        <p className='mt-3 px-2'>OR</p>
                        <div style={{ height: '1px' }} className='w-50 bg-success'></div>
                    </div>
                    <div className='d-flex p-2 ms-3'>
                    <div><img height={50} src={facebook} className='ms-5' alt="" /></div>
                    <div><img height={50} src={google} className='ms-5' alt="" /></div>
                    <div><img height={50} src={github} className='ms-5' alt="" /></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default Register;