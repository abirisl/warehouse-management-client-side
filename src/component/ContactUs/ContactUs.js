import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarker } from '@fortawesome/free-solid-svg-icons';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div>
            <div className='mt-3 text-center'>
                <h1 className='text-uppercase'>Contact us</h1>
                <hr className='w-50 mx-auto' />
                <h3>We'd Love to Help !!</h3>
                <p>We Like to create things with fun, open-minded peopl. Feel to say hello......!</p>
            </div>
            <Container>
            <Row className='shadow-lg rounded-lg mt-3 mb-3 bg-warning mx-auto'>
                <Col lg={6} md={3} sm={12} className=' d-flex mx-auto p-5'>
                    <Form>
                        <input type='text' name='text' placeholder='Your Name' className='form-control'></input>
                        <br />
                        <input type='email' name='email' placeholder='Your email' className='form-control'></input>
                        <br />
                        <textarea type='text' name='text' placeholder='Message' className='form-control'></textarea>
                        <Button className='w-100 mt-3' variant="info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                <div className='mt-5'>
                        <p>
                        <FontAwesomeIcon icon={faMapMarker} />  South Middle Halishar,Bandar,Chottagram
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faPhone} />  01872900536
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} />  mohammadmehedihasan84@gmail.com
                        </p>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ContactUs;