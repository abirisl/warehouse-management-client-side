import React from 'react';
import { Col, Row } from 'react-bootstrap';
import company1 from '../../images/our-company/company1.png';
import company2 from '../../images/our-company/company2.png';
import company3 from '../../images/our-company/company3.png'

const OurCompany = () => {
    return (
        <div>
                
            <h1 className='text-uppercase text-center text-success fw-bold mt-5'>Our Company</h1>
            <hr className='w-25 mx-auto fw-bold'/>
                <div className='d-flex ms-3 mt-3'>
                <Row sm={12} className='mx-auto'>
            <Col>
            <div className='shadow-lg  rounded-lg border border-2'>
                <img width={250} height={200} src={company1} alt="" />
            </div>
            </Col>
            <Col>
            <div className='shadow-lg p-2 border border-2'>
                <img width={250} height={180} src={company2} alt="" />
            </div>
            </Col>
            <Col>
            <div className='shadow-lg p-2 border border-2'>
                <img className='mt-5' width={250} height={133} src={company3} alt="" />
            </div>
            </Col>
            </Row>
        </div>
        </div>
    );
};

export default OurCompany;