import React from 'react';
import useProduct from '../../Hooks/useProduct';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';


const Information = () => {
    const [products,setProducts] = useProduct();
    return (
        <CardGroup>
            <Col>
            <Card>
                <Card.Img variant="top" src={products.img} />
                <Card.Body>
                    <Card.Title className='text-success'>{products.name}</Card.Title>
                    <h5>price: ${products.price}</h5>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                    <Button>Update</Button>
                </Card.Body>
            </Card>
            </Col>
        </CardGroup>
    );
};

export default Information;