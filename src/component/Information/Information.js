import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Information = () => {
   const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <CardGroup  className='p-5 shadow-lg rounded-lg mt-3 m-5 bg-light'>
            <Col md={6} sm={12}>
            <Card>
                <Card.Img variant="top" className='w-100 p-3' src={product.img} />
                <Card.Body className='w-100'>
                    <Card.Title className='text-success'>{product.name}</Card.Title>
                    <h5>price: ${product.price}</h5>
                    <h6>Quantity: {product.quantity}</h6>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button className='bg-warning'>Delivered</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col md={6} sm={12}>
            <div className='text-center mt-3'>
                    <h1>Quantity</h1>
                    <br />
                    <input type="text" placeholder='Product add' />
                    <button>Add</button>
                </div>
            </Col>
        </CardGroup>
    );
};

export default Information;