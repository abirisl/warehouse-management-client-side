import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const Product = ({ card }) => {
    const { name, img, price, description } = card

    return (
        <CardGroup>
            <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-success'>{name}</Card.Title>
                    <h5>price: ${price}</h5>
                    <Card.Text>
                        {description.slice(0,150) + '.......'}
                    </Card.Text>
                    <Button>Update</Button>
                </Card.Body>
            </Card>
            </Col>
        </CardGroup>
    );
};

export default Product;