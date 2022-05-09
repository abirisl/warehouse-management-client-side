import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear(); 
    return (
        <div className='bg-dark text-white pb-4 text-center'>
            
            <div className=' d-flex p-4'>
            <Row xs={1} md={4}>
                <Col>
                <div className='mx-auto mt-3'>
                    <h5 className='text-uppercase font-weight-bold text-warning'>Company Name</h5>
                    <p>Shah Amanot Bike WareHOuse</p>
                </div>
                </Col>
                <Col>
                <div className='mx-auto mt-3'>
                    <h5 className='text-uppercase text-warning font-weight-bold'>products</h5>
                   <p>
                   <a href="#" className='text-white' style={{textDecoration: 'none'}}>Manage Inventory</a>
                   </p>
                   <p>
                   <a href="#" className='text-white' style={{textDecoration: 'none'}}>Add New Item</a>
                   </p>
                  <p>
                  <a href="#" className='text-white' style={{textDecoration: 'none'}}>Sourcefile</a>
                  </p>
                </div>
                </Col>
                <Col>
                <div className='mx-auto mt-3'>
                    <h5 className='text-uppercase font-weight-bold text-warning'>useful links</h5>
                    <p>
                   <a href="#" className='text-white' style={{textDecoration: 'none'}}>Your Account</a>
                   </p>
                   <p>
                   <a href="#" className='text-white' style={{textDecoration: 'none'}}>Become a Affiliates</a>
                   </p>
                  <p>
                  <a href="#" className='text-white' style={{textDecoration: 'none'}}>Helps</a>
                  </p>
                </div>
                </Col>
                <Col>
                <div className='mx-auto mt-3'>
                    <h5 className='text-uppercase text-warning font-weight-bold'>Contact</h5>
                    <p>
                    <FontAwesomeIcon icon={faHome} /> South Middle Halishar,Chittagong
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faEnvelope} /> mohammadmehedihasan84@gmail.com
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faPhone} /> +8801872900536
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faPrint} /> +009872900536
                    </p>
                </div>
                </Col>
                </Row>
              </div>
            
              <hr/>
                <div className='text-center'>
                <p>Copyright @{year} All rights reserved by: <span className='text-warning'>The Providers</span></p>
                </div>
            </div>
               
                
        
    );
};

export default Footer;