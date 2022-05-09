import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddItems = () => {
    const { register, handleSubmit } = useForm();

     const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
   
        })
        .then(res => res.json())
        .then(result => result)
   
     };
    return (
        <>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={12} className='p-5 m-auto shadow-sm rounded-lg mt-3 mb-3'>
                        <h1 className='text-primary p-3 text-center mb-3'>Add Items</h1>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="text" placeholder="Product name" {...register("name", { required: true, maxLength: 20 })}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="number" placeholder="Price"  {...register("price")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="number" placeholder="Quantity"  {...register("quantity")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="text" placeholder="Description" {...register("description")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="text" placeholder="Photo url" {...register("img")}/>
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Add Product
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddItems;