import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ card }) => {
    const { _id, name, img, price, description } = card;

    const navigate = useNavigate();

    const navigatorServiceDetail = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <CardGroup>
            <Col>
            <Card className='shadow-lg rounded-lg mt-3'>
                <Card.Img variant="top" className='p-5' src={img} />
                <Card.Body>
                    <Card.Title className='text-success'>{name}</Card.Title>
                    <h5>price: ${price}</h5>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick= {() => navigatorServiceDetail(_id)}>Update</Button>
                </Card.Body>
            </Card>
            </Col>
        </CardGroup>
    );
};

export default Product;