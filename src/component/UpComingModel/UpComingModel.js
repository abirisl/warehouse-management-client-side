import React from 'react';
import { Col, Row } from 'react-bootstrap';
import coming1 from '../../images/up-coming/coming1.png';
import coming2 from '../../images/up-coming/coming2.png';
import coming3 from '../../images/up-coming/coming3.png';
import coming4 from '../../images/up-coming/coming4.png'


const UpComingModel = () => {
    return (
        <div>
                
            <h1 className='text-uppercase text-center text-success fw-bold mt-5'>UpComing Model</h1>
            <hr className='w-25 mx-auto fw-bold'/>
                <div className='d-flex mt-3 mb-3' >
                <Row sm={12} md={4}>
            <Col>
            <div className='shadow-lg w-50'>
                <img src={coming1} alt="" />
            </div>
            </Col>
            <Col>
            <div className='shadow-lg p-2  w-50'>
                <img  src={coming2} alt="" />
            </div>
            </Col>
            <Col>
            <div className='shadow-lg p-2 w-50'>
                <img width={260} height={160}  src={coming3} alt="" />
            </div>
            </Col>
            <Col>
            <div className='shadow-lg p-2 w-50'>
                <img width={270} height={160}  src={coming4} alt="" />
            </div>
            </Col>
            </Row>
        </div>
        </div>
    );
};

export default UpComingModel;